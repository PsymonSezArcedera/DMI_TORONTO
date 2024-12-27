import React from "react";
import "/src/styles/Contact.css"; 
import Footer from "../components/Footer";
import MainHeader from "../components/Header";
import Newsletter from "../components/Newsletter";

function Contact() {
  return (
    <div>

      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We would love to hear from you! 
          Whether you have questions about our services, want to join our community, 
          or need prayers and support, feel free to reach out.
        </p>
      </div>

      <div className="contact-page">
        <div className="contact-left">
          <h1>Get in Touch</h1>
          <div className="contact-info">
            <p>Reach out to us via email or connect with us on social media. We're here to assist you with any support you may need!</p>
            <h2>Email</h2>
            <a href="mailto:dmi@gmail.com">dmi@gmail.com</a>

            <h2>Phone:</h2>
            <a href="tel:+14167313113">+1 416-731-3113</a>

            <h2>Facebook</h2>
            <a 
              href="https://www.facebook.com/DMIToronto" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Destiny Toronto
            </a>

            <h2>YouTube</h2>
            <a 
              href="https://www.youtube.com/DMI" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              www.youtube.com/DMI
            </a>

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
      
      <Newsletter />

    </div>
  );
}

export default Contact;
