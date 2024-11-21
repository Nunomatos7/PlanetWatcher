import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EarthGallery from './pages/EarthGallery';
import AsteroidTracker from './pages/AsteroidTracker';
import EventTracker from './pages/EventTracker';
import About from './pages/About';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/earth-gallery" element={<EarthGallery />} />
        <Route path="/asteroid-tracker" element={<AsteroidTracker />} />
        <Route path="/event-tracker" element={<EventTracker />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
