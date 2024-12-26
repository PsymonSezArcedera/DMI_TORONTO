import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Live from './Live';
import About from './About';
import Contact from './Contact';
import Event from './Event';

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/live" element={<Live />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/event" element={<Event />} />
    </Routes>
  );
}

export default Root;
