import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Live from './Live';
import Contact from './Contact';
import History from './History';
import Team from './Team';
import Event from './Event';
import Article from './Articles/Article1';
import AdminEvent from "./AdminEvent"; 



function Root() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/live" element={<Live />} />
      <Route path="/history" element={<History />} />  
      <Route path="/team" element={<Team />} />  
      <Route path="/contact" element={<Contact />} />
      <Route path="/event" element={<Event />} />
      <Route path="/article" element={<Article />} />
      <Route path="/adminevent" element={<AdminEvent />} />
    </Routes>
  );
}

export default Root;
