import React from 'react';
import logo from '/src/assets/dmi_logo_footer.png'
import facebook from '/src/assets/icon_facebook.png'
import youtube from '/src/assets/icon_youtube.png'
import '/src/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>About Us</h3>
        <p>We are Destiny Ministry International, spreading God's word and work to everyone.</p>
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </div>
      <div className="footer-section">
        <h3>Contact Info</h3>
        <p>Address: 1530 Birchmount Rd, Scarborough, ON M1P 2H2, Canada</p>
        <p>Email: dmi@gmail.com</p>
        <p>Phone: +1 416-731-3113</p>
      </div>
      <div className="footer-section">
        <h3>Social Media</h3>
        <div className="social-media-container">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src={facebook} alt="Facebook" className="social-icon" />
            <span className="social-text">Destiny Toronto</span>
          </a>
          <div></div>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src={youtube} alt="YouTube" className="social-icon" />
            <span className="social-text">Destiny Toronto</span>
          </a>
        </div>
      </div>
      <div className="footer-section">
        <h3>Newsletter</h3>
        <p>Subscribe to our newsletter to get weekly updates about Destiny Ministry.</p>
      </div>
    </footer>
  );
};

export default Footer;
