import React from 'react';
import '/src/styles/Home.css';
import image1 from '/src/assets/Image1.jpg' 
import image2 from '/src/assets/Image2.jpg' 
import image3 from '/src/assets/Image3.jpg' 
import image4 from '/src/assets/Image4.jpg' 
import image5 from '/src/assets/Image5.jpg' 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Footer from '../components/Footer';
import MainHeader from '../components/Header';

function Home() {
  return (
    <div className="Home-Page">
      <div className="top-rectangle">
        <MainHeader />
      </div>

      <div className="Home-Top">
          <h1>GOD, FAMILY, NATIONS</h1>
      </div>

      <div className="Home-Body-1">
  <div className="image-container">
    <img src={image1} alt="Description of image" width="300" height="300" />
    <img src={image2} alt="Description of image" width="300" height="300" />
  </div>
  <div className="text-container">
    <h1>DMI Description</h1>
    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
  </div>
</div>

      <div className="Home-Body-2">
      <h5>DMI CHURCH</h5>
      <h1> Here at Destiny Ministry International, Lorem ipsum dolor sit amit, consectetur adipiscing elit.</h1>
      <h5>Joseh Salongan</h5>
      <h5>HEAD PASTOR</h5>
      </div>

      <div className="Home-Body-3">
      <img className = "display-1" src={image3} alt="Description of image" width="300" height="300"/>
      <img className = "display-2" src={image4} alt="Description of image" width="300" height="300"/>
      <img className = "display-3" src={image5} alt="Description of image" width="300" height="300"/>
      </div>

      <div className="bottom-rectangle">
        <Footer />
      </div>
    </div>
  );
}


export default Home;

