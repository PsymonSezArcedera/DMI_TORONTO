import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from "/src/assets/Article1.jpg";
import image2 from "/src/assets/Article2.jpg";
import image3 from "/src/assets/Article3.jpg";
import image4 from "/src/assets/Article4.jpg";
import image5 from "/src/assets/Article5.jpg";
import image6 from "/src/assets/Article6.jpg";
import Read from "/src/assets/Read.png";
import Share from "/src/assets/Share.png";
import "/src/styles/Event.css";

function EventCard({ title, articleLink, imageSrc, onNavigate, onShare }) {
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
            <img src={Read} alt="Read" className="button-icon" />
          </button>
          <button onClick={() => onShare(articleLink)} className="share-button">
            <img src={Share} alt="Share" className="button-icon" />
          </button>
        </div>
      </div>
      <h3 className="event-title">{title}</h3>
    </div>
  );
}


function Event() {
  const navigate = useNavigate();

  const articles = [
    { id: 1, title: "Article 1", link: "http://localhost:5173/article", image: image1 },
    { id: 2, title: "Article 2", link: "http://localhost:5173/article", image: image2 },
    { id: 3, title: "Article 3", link: "http://localhost:5173/article", image: image3 },
    { id: 4, title: "Article 4", link: "http://localhost:5173/article", image: image4 },
    { id: 5, title: "Article 5", link: "http://localhost:5173/article", image: image5 },
    { id: 6, title: "Article 6", link: "http://localhost:5173/article", image: image6 },
  ];

  const navigateToArticle = (link) => {
    navigate(link.replace("http://localhost:5173", "")); // Adjust path for React Router
  };

  const shareArticle = (link) => {
    navigator.clipboard.writeText(link).then(() => {
      alert("Article link copied to clipboard: " + link);
    }).catch((err) => {
      console.error("Failed to copy link: ", err);
    });
  };

  return (
    <div className="event-container">
      {articles.map((article) => (
        <EventCard
          key={article.id}
          title={article.title}
          articleLink={article.link}
          imageSrc={article.image}
          onNavigate={() => navigateToArticle(article.link)}
          onShare={() => shareArticle(article.link)}
        />
      ))}
    </div>
  );
}

export default Event;
