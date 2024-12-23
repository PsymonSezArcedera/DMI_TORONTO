import React from "react";
import '/src/styles/Live.css'; 
import MainHeader from "../components/Header";
import Footer from "../components/Footer";


function Live() {
  const videos = [
    { src: "https://www.youtube.com/embed/rONI7KgM_IU", date: "December 22, 2024" },
    { src: "https://www.youtube.com/embed/mHXRUvxNKFw", date: "December 21, 2024" },
    { src: "https://www.youtube.com/embed/FbL65RNnPbk", date: "December 20, 2024" }
  ];
  


  return (
    <div className="Live-Page">
      <div className="top-rectangle">
        <MainHeader />
      </div>

      <div className="LiveVid">
        <h1>SUNDAY SERVICE</h1>
        <h5>December 22, 2024</h5>
        <iframe
          width="800"
          height="480"
          src="https://www.youtube.com/embed/Zu7jurElcIM"
          style={{ border: "none", borderRadius: "15px"  }}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="DMI Live Video"
        ></iframe>
      </div>



      <div className="PreviousVid">
      <h1>PREVIOUS LIVES</h1>
        <div className="scroll-container">
          {videos.map((video, index) => (
            <div key={index} className="video-item">
              <iframe
                width="400"
                height="250"
                src={video.src}
                style={{ border: "none", borderRadius: "15px"  }}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`DMI Live Video - ${index}`}
              ></iframe>
              <h5>{video.date}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="bottom-rectangle">
        <Footer />
      </div>
    </div>
  );
}

export default Live;

