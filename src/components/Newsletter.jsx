import React, { useState } from "react";
import '/src/styles/Newsletter.css';

import send from '/src/assets/icon_send_black.png'

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setMessage("Thank you for subscribing!");
      setEmail(""); 
      setShowModal(true); // Show the modal after submission
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

  const handleOutsideClick = (e) => {
    // Close the modal if the user clicks outside the modal content
    if (e.target.classList.contains("modal")) {
      closeModal();
    }
  };

  return (
    <div className="news-letter">
      <div className="news-letter-content">

        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="icon-button">
            <img src={send} alt="Subscribe" className="button-image" />
          </button>
        </form>

        <div className="text-content">
          <h1>Our Newsletter</h1>
          <p>Join our community and receive inspiring messages, upcoming event details, and ways to grow in faith. Stay connected with us and be part of our journey.</p>
        </div>

      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal" onClick={handleOutsideClick}>
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h3>{message}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Newsletter;
