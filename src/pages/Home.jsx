import React from 'react';
import '/src/styles/Home.css';
import image1 from '/src/assets/Image1.jpg'
import image2 from '/src/assets/Image2.jpg'
import image3 from '/src/assets/Image3.jpg'
import image4 from '/src/assets/Image4.jpg'
import image5 from '/src/assets/Image5.jpg'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="Home-Page">


      <div className="Home-Top">
        <div className="Home-Top-Text">
          <h1>GOD.</h1>
          <h1>FAMILY. NATIONS.</h1>
        </div>
      </div>


      <div className="Home-Body-1">
        <div className="image-container">
          <h2>2008</h2>
          <h3>STARTED</h3>
          <img class="image1" src={image1} alt="Description of image" width="400" height="400" />
          <img class="image2" src={image2} alt="Description of image" width="400" height="400" />
        </div>
        <div className="text-container">
          <h2>Who we are</h2>
          <h1>Description</h1>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h5>
          <button className="about-us-button" onClick={() => navigate('/about')}>
            About Us
          </button>
        </div>
      </div>

      <div className="Home-Body-2">
        <h5>DMI CHURCH</h5>
        <h1> Here at Destiny Ministry International, Lorem ipsum dolor sit amit, consectetur adipiscing elit.</h1>
        <h5>Joseh Solangon</h5>
        <h4>HEAD PASTOR</h4>
      </div>

      <div className="Home-Body-3">
        <img className="display-1" src={image3} alt="Description of image" width="300" height="300" />
        <img className="display-2" src={image4} alt="Description of image" width="300" height="300" />
        <img className="display-3" src={image5} alt="Description of image" width="300" height="300" />
      </div>



    </div>
  );
}


export default Home;

