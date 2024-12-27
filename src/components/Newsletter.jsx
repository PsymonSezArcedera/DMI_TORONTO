import React, { useState } from "react";

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
      <h1>Subscribe to our Newsletter</h1>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>

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
