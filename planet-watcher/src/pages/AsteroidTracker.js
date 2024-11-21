import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchNeoWsData } from '../services/api';

const TrackerContainer = styled.div`
  padding: 2rem;
  text-align: center;
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
  }
  th, td {
    padding: 8px;
    text-align: center;
  }
  th {
    background-color: #2d89ef;
    color: white;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const AsteroidTracker = () => {
  const [asteroids, setAsteroids] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAsteroids = async () => {
      setLoading(true);
      try {
        const data = await fetchNeoWsData();
        const dates = Object.keys(data.near_earth_objects);
        const allAsteroids = dates.flatMap(date => data.near_earth_objects[date]);
        setAsteroids(allAsteroids);
      } catch (error) {
        console.error('Error loading asteroids:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAsteroids();
  }, []);

  return (
    <TrackerContainer>
      <h1>☄️ Asteroid Tracker</h1>
      {loading ? (
        <p>Loading asteroids...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Diameter (meters)</th>
              <th>Velocity (km/h)</th>
              <th>Distance from Earth (km)</th>
            </tr>
          </thead>
          <tbody>
            {asteroids.map((asteroid) => (
              <tr key={asteroid.id}>
                <td>{asteroid.name}</td>
                <td>{(
                  (asteroid.estimated_diameter.meters.estimated_diameter_min +
                    asteroid.estimated_diameter.meters.estimated_diameter_max) /
                  2
                ).toFixed(2)}</td>
                <td>{Number(asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour).toLocaleString()}</td>
                <td>{Number(asteroid.close_approach_data[0].miss_distance.kilometers).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </TrackerContainer>
  );
};

export default AsteroidTracker;
