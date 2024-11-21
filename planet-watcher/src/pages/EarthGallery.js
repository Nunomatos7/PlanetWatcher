import React, { useState, useEffect } from 'react';
import { fetchEPICImages } from '../services/api';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  
`;

const EarthGallery = () => {
  const [images, setImages] = useState([]);
  const [date, setDate] = useState('2024-11-01');

  useEffect(() => {
    const loadImages = async () => {
      const data = await fetchEPICImages(date);
      setImages(data);
    };

    loadImages();
  }, [date]);

  return (
    <GalleryContainer>
      <h1>🌍 Earth Gallery</h1>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        max={new Date().toISOString().split('T')[0]}
        style={{ marginBottom: '1rem', padding: '0.5rem' }}
      />
      <div>
        {images.map((image, index) => (
          <img
            key={index}
            src={`https://epic.gsfc.nasa.gov/archive/natural/${date.split('-').join('/')}/png/${image.image}.png`}
            alt={`Earth ${index}`}
            style={{ width: '100%', maxWidth: '350px', borderRadius: '8px' }}
          />
        ))}
      </div>
    </GalleryContainer>
  );
};

export default EarthGallery;
