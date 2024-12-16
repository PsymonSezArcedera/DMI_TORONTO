import React from 'react';
import '/src/styles/Home.css';
import banner from '/src/assets/HEADER.png' 
import image1 from '/src/assets/IMAGE 1.png'
import image2 from '/src/assets/IMAGE 2.png' 
import image3 from '/src/assets/IMAGE 3.png'  
import image4 from '/src/assets/IMAGE 4.png' 
import image5 from '/src/assets/IMAGE 5.png' 
import image6 from '/src/assets/IMAGE 6.png' 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Footer from '../components/Footer';
import MainHeader from '../components/Header';

function Home() {
  return (
    <div className="home-container">

      <section className="hero" style={{ backgroundImage: `url(${banner})` }}>
        <MainHeader />
        <h1>JOIN US IN SPREADING GOD’S WORD</h1>
      </section>

      <main className="main-content">
        <section className="events">
          <div className="event">
            <img src={image4} alt="DMI Charity Event 2024" />
            <p>DMI CHARITY EVENT 2024</p>
          </div>
          <div className="event">
            <img src={image5} alt="Community Help" />
          </div>
          <div className="event">
            <img src={image2} alt="Church Renovation" />
            <p>CHURCH RENOVATION</p>
          </div>
          <div className="event">
            <img src={image1} alt="Neighborhood Feeding Program" />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}


export default Home;
