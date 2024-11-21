import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #1b1b1b;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <h1>🌍 Planet Watcher</h1>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/earth-gallery">Earth Gallery</Link>
        <Link to="/asteroid-tracker">Asteroid Tracker</Link>
        <Link to="/event-tracker">Event Tracker</Link>
        <Link to="/about">About</Link>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
