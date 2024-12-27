import React from "react";
import '/src/styles/Event.css'; 
import image1 from '/src/assets/Article1.jpg' 
import MainHeader from "../components/Header";
import Footer from "../components/Footer";


function Event() {


  return (
    <div className="Event-Page">
      <div className="top-rectangle">
        <MainHeader />
      </div>
      <div className="Events">
        
        <img class="image1" src={image1} alt="Description of image" width="350" height="200" />
        <button class="like">1</button>
        <button class="share">2</button>

      </div>
      <div className="bottom-rectangle">
        <Footer />
      </div>
    </div>
  );
}

export default Event;

