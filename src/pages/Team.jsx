import React from "react";
import image1 from "/src/assets/Pastor1.png";
import image2 from "/src/assets/Pastor2.png";
import image3 from "/src/assets/Pastor3.png";
import image4 from "/src/assets/Pastor4.png";
import image5 from "/src/assets/Pastor5.png";
import image6 from "/src/assets/Pastor6.png";
import "/src/styles/Team.css";
import About from "/src/components/About.jsx";

function Team() {
  return (
    <div>
      <About />
      <h1 className="team-title">MEET THE DMI FAMILY</h1>
        <p className="team-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      <div className="team-grid">
        <div className="team-member">
          <img className="image1" src={image1} alt="Description of image" />
          <h2>John Doe</h2>
          <h1>POSITION</h1>
        </div>
        <div className="team-member">
          <img className="image1" src={image2} alt="Description of image" />
          <h2>Jane Smith</h2>
          <h1>POSITION</h1>
        </div>
        <div className="team-member">
          <img className="image1" src={image3} alt="Description of image" />
          <h2>Mary Johnson</h2>
          <h1>POSITION</h1>
        </div>
        <div className="team-member">
          <img className="image1" src={image4} alt="Description of image" />
          <h2>James Brown</h2>
          <h1>POSITION</h1>
        </div>
        <div className="team-member">
          <img className="image1" src={image5} alt="Description of image" />
          <h2>Patricia Garcia</h2>
          <h1>POSITION</h1>
        </div>
        <div className="team-member">
          <img className="image1" src={image6} alt="Description of image" />
          <h2>Robert Martinez</h2>
          <h1>POSITION</h1>
        </div>
      </div>
    </div>
  );
}

export default Team;
