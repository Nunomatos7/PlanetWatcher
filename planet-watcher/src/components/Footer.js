import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1b1b1b;
  color: white;
  text-align: center;
  padding: 1rem;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        Data provided by <a href="https://api.nasa.gov" target="_blank" rel="noopener noreferrer">NASA APIs</a>
      </p>
      <p>© 2024 Planet Watcher</p>
    </FooterContainer>
  );
};

export default Footer;
