import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchEPICImages, fetchNeoWsData, fetchEONETEvents } from '../services/api';
import Footer from '../components/Footer';

const HomeContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 2rem;

  h2 {
    color: #2d89ef;
    font-size: 1.8rem;
  }

  img {
    max-width: 30%;
    height: auto;
    border-radius: 8px;
  }

  .details {
    margin-top: 1rem;
    font-size: 1.1rem;
    color: #555;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    background-color: #f4f4f4;
    margin: 10px 0;
    padding: 10px;
    border-radius: 8px;
    color: #333;
  }
`;

const LoadingMessage = styled.p`
  font-size: 1.5rem;
  color: #2d89ef;
`;

const Home = () => {
  const [epicImage, setEpicImage] = useState(null);
  const [featuredAsteroid, setFeaturedAsteroid] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const epicData = await fetchEPICImages('2024-11-01');
        setEpicImage(epicData[0]);

        const neoData = await fetchNeoWsData();
        setFeaturedAsteroid(neoData.near_earth_objects[Object.keys(neoData.near_earth_objects)[0]][0]);

        // Fetch events and limit to the 3 most recent
        const eonetData = await fetchEONETEvents();
        const latestEvents = eonetData.events.slice(0, 3); // Get the top 3 latest events
        setEvents(latestEvents);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

//   if (loading) {
//     return <LoadingMessage>Loading data, please wait...</LoadingMessage>;
//   }

  return (
    <HomeContainer>
      <Section>
        <h2>🌍 Latest Earth Image</h2>
        {epicImage && (
          <>
            <img src={`https://epic.gsfc.nasa.gov/archive/natural/2024/11/01/png/${epicImage.image}.png`} alt="Earth" />
            <p className="details">{epicImage.caption}</p>
          </>
        )}
      </Section>

      <Section>
        <h2>☄️ Featured Asteroid</h2>
        {featuredAsteroid && (
          <p className="details">
            {featuredAsteroid.name} is approaching Earth at a speed of{' '}
            {featuredAsteroid.close_approach_data[0].relative_velocity.kilometers_per_hour} km/h.
          </p>
        )}
      </Section>

      <Section>
        <h2>🌪️ Latest Events</h2>
        
        {events.length > 0 ? (
          <ul>
            {events.map((event, index) => (
              <li key={index}>
                <strong>{event.title}</strong>
                <br />
                Category: {event.categories[0].title}
                <br />
                Date: {new Date(event.geometry[0].date).toLocaleDateString()}
              </li>
            ))}
          </ul>
        ) : (
          <p>No events found.</p>
        )}
      </Section>
      <Footer />
    </HomeContainer>
    
  );
};

export default Home;
