import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const About = () => (
  <AboutContainer>
    <h1>About</h1>
    <p>
      This is a React app that uses NASA APIs to display information about the
      Earth, asteroids, and events.
    </p>
  </AboutContainer>
);

export default About;
