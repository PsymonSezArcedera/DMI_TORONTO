import React from 'react';
import { useNavigate } from 'react-router-dom';
import '/src/styles/About.css';
import History from "/src/assets/History.png"
import Team from "/src/assets/Team.png"

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about">
      <div className="button-container">
        <button className="history" onClick={() => navigate('/history')}>
          <img class="history-img" src={History} />
        </button>
        <button className="team" onClick={() => navigate('/team')}>
          <img class="history-img" src={Team} />
        </button>
      </div>
    </div>
  );
};

export default About;
