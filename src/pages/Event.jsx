import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "/src/styles/Event.css";

function EventCard({ title, imageSrc, date, onNavigate }) {
  return (
    <div className="event-card">
      <div className="image-container">
        <img
          className="event-image"
          src={imageSrc} 
          alt={title}
          onClick={onNavigate}
        />
        <div className="event-buttons">
          <button onClick={onNavigate} className="read-article-button">
            Visit
          </button>
        </div>
      </div>
      <h3 className="event-title">{title}</h3>
      <p className="event-date">{date}</p>
    </div>
  );
}

function Event() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5001/articles")
      .then((response) => setArticles(response.data))
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  const navigateToArticle = (link) => {
    navigate(link.replace("http://localhost:5173", ""));
  };

  return (
    <div>
      <h1 className="archive-title">Destiny Archives</h1>
      <p className="archive-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.
      </p>
      <div className="event-container">
        {articles.map((article) => (
          <EventCard
            key={article._id}
            title={article.title}
            imageSrc={`http://localhost:5001${article.image}`} // Image path from server
            date={article.date}
            onNavigate={() => navigateToArticle(article._id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Event;
