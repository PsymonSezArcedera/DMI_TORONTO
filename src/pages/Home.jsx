import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '/src/styles/Home.css';
import image1 from '/src/assets/Image1.jpg';
import image2 from '/src/assets/Image2.jpg';
import image3 from '/src/assets/Image3.jpg';
import image4 from '/src/assets/Image4.jpg';
import image5 from '/src/assets/Image5.jpg';
import slider1 from '/src/assets/Slider1.png';
import slider2 from '/src/assets/Slider2.png';
import slider3 from '/src/assets/Slider3.png';
import slider4 from '/src/assets/Slider4.png';

function Home() {
  const navigate = useNavigate();

  const sliderImages = [slider1, slider2, slider3, slider4];
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [contentIndex, setContentIndex] = useState(1);
  const contentData = [
    {
      title: "GUESS SPEAKER: GEORGINA WILSON",
      description: "|This is the first page description|",
      link: "/page1",
    },
    {
      title: "CROSSOVER 2025: THIS COMING SUNDAY",
      description: "|Discover more on the second page|",
      link: "/page2",
    },
    {
      title: "WEEKLY SUNDAY MORNING MINISTRY",
      description: "|Information about the third page|",
      link: "/page3",
    },
    {
      title: "DMI AFTER CHURCH FELLOWSHIP",
      description: "|Details for the fourth page|",
      link: "/page4",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % sliderImages.length); 
      setContentIndex((prevIndex) => (prevIndex % 4) + 1); 
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  const currentContent = contentData[contentIndex - 1];

  return (
    <div className="Home-Page">
      <div className="Carousel">
        <img
          className="slider"
          src={sliderImages[carouselIndex]}
          alt={`Slider ${carouselIndex + 1}`}
        />
        <div className="Carousel-text">
          <h2>{currentContent.title}</h2>
          <h5>{currentContent.description}</h5>
          <button className="go-to-page" onClick={() => navigate(currentContent.link)}>
            Go to Page
          </button>
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
          <button className="about-us-button" onClick={() => navigate('/history')}>
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
