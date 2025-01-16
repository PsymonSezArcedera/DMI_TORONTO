import React from "react";
import Aimage1 from "/src/assets/Article1.jpg";
import Aimage2 from "/src/assets/Article5.jpg";
import Aimage3 from "/src/assets/Article3.jpg";
import "/src/styles/History.css";
import About from "/src/components/About.jsx"

import image1 from "/src/assets/Pastor1.png";
import image2 from "/src/assets/Pastor2.png";
import image3 from "/src/assets/Pastor3.png";
import image4 from "/src/assets/Pastor4.png";
import image5 from "/src/assets/Pastor5.png";
import image6 from "/src/assets/Pastor6.png";

const historyData = [
  {
    id: 1,
    title: "History Title 1", // Title for the first item
    image: Aimage1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    title: "History Title 2", // Title for the second item
    image: Aimage2,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    title: "History Title 3", // Title for the third item
    image: Aimage3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

function History() {
  return (
    <div>
    <h1 className="history-title">OUR HISTORY</h1>
    <div className="history-grid">
     
      {historyData.map((item, index) => (
        <div key={item.id} className="history-item">
          <div className="history-title">
            <h2>{item.title}</h2> 
            <p>{item.description}</p>
          </div>
          <img src={item.image} alt={`Description ${index + 1}`} />
        </div>
      ))}
    </div>
    <div className="team-section">
    <h1 className="team-title">MEET THE DMI FAMILY</h1>
            <p class Name="team-description">
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
    </div>
    
  );
}

export default History;