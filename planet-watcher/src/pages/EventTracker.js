import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchEONETEvents } from '../services/api';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const TrackerContainer = styled.div`
  padding: 2rem;
  text-align: center;

  .map {
    margin: 1rem auto;
    width: 100%;
    height: 500px;
  }
`;

const EventTracker = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      const data = await fetchEONETEvents();
      setEvents(data.events);
    };

    loadEvents();
  }, []);

  return (
    <TrackerContainer>
      <h1>🌪️ Event Tracker</h1>
      <MapContainer className="map" center={[0, 0]} zoom={2} scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
        />
        {events.map((event, index) =>
          event.geometry.map((geo, i) => (
            <Marker key={`${index}-${i}`} position={[geo.coordinates[1], geo.coordinates[0]]}>
              <Popup>
                <strong>{event.title}</strong>
                <br />
                Category: {event.categories[0].title}
                <br />
                Date: {new Date(geo.date).toLocaleDateString()}
              </Popup>
            </Marker>
          ))
        )}
      </MapContainer>
    </TrackerContainer>
  );
};

export default EventTracker;
