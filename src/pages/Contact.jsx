import React from "react";
import "/src/styles/Contact.css"; 

import Donation from "../components/Donation";
import Newsletter from "../components/Newsletter";
import Map from "../components/Map"

import facebook from '/src/assets/icon_facebook_black.png'
import youtube from '/src/assets/icon_youtube_black.png'
import spotify from '/src/assets/icon_spotify_black.png'
import email from '/src/assets/icon_email_black.png'
import phone from '/src/assets/icon_phone_black.png'


function Contact() {
  return (
    <div>

      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We would love to hear from you! 
          Whether you have questions about our services, want to join our community, 
          or need prayers or any support you may need, feel free to reach out to DMI Toronto.
        </p>
      </div>

      <div className="contact-page">
        <div className="contact-left">
          <h1>Get in Touch</h1>

          <div className="contact-info">
          <p>Reach out to us via email or connect with us on social media. We're here to assist you with any support you may need!</p>

          <div className="social-link">
            <img src={email} alt="Email Icon" className="social-icon" />
            <div className="social-text">
              <span className="social-title">Email</span>
              <p className="social-subtext">
                <a href="mailto:dmi@gmail.com">dmi@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="social-link">
            <img src={phone} alt="Phone Icon" className="social-icon" />
            <div className="social-text">
              <span className="social-title">Phone</span>
              <p className="social-subtext">
                <a href="tel:+14167313113">+1 416-731-3113</a>
              </p>
            </div>
          </div>

          <div className="social-link">
            <img src={facebook} alt="Facebook Icon" className="social-icon" />
            <div className="social-text">
              <span className="social-title">Facebook</span>
              <p className="social-subtext">
                <a href="https://www.facebook.com">Destiny Toronto</a>
              </p>
            </div>
          </div>

          <div className="social-link">
            <img src={youtube} alt="YouTube Icon" className="social-icon" />
            <div className="social-text">
              <span className="social-title">YouTube</span>
              <p className="social-subtext">
                <a href="https://www.youtube.com">Destiny Toronto</a>
              </p>
            </div>
          </div>

          <div className="social-link">
            <img src={spotify} alt="Spotify Icon" className="social-icon" />
            <div className="social-text">
              <span className="social-title">Spotify</span>
              <p className="social-subtext">
                <a href="https://open.spotify.com">Destiny Toronto</a>
              </p>
            </div>
          </div>
        </div>
        </div>


        <div className="contact-right">
          <h1>Send a Message</h1>
          <form className="contact-form" method="post" action="/send-message">

            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Name" 
              aria-label="Name"
              required 
            />

            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Email" 
              aria-label="Email"
              required 
            />

            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              placeholder="Message" 
              aria-label="Message"
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      
      <Donation />
      <Newsletter />
      <Map />
      
      <p className="map-text">
      We warmly invite you to join us for services, events, or simply to spend time in prayer and reflection. Our church community is always open to welcoming new visitors, and we look forward to sharing our faith and fellowship with you.
      </p>

    </div>
  );
}

export default Contact;
