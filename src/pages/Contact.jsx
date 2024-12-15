import React from "react";
import '/src/styles/Contact.css'; 

function Contact() {
  return (
    <div className="contact-page">
      <div className="top-rectangle"></div>

      <div className="contact-left">
        <h1>GIVE US A CALL:</h1>

        <div className="contact-info">
          <h2>Email:</h2>
          <p>dmi@gmail.com</p>
          <h2>Phone:</h2>
          <p>+1 416-731-3113</p>
          <h2>Facebook:</h2>
          <p><a href="https://www.facebook.com/DMI" target="_blank" rel="noopener noreferrer">www.facebook.com/DMI</a></p>
          <h2>Youtube:</h2>
          <p><a href="https://www.youtube.com/DMI" target="_blank" rel="noopener noreferrer">www.youtube.com/DMI</a></p>
        </div>

      </div>

      <div className="contact-right">
        <h1>VISIT US:</h1>
        <p>1530 Birchmount #7, Toronto, ON, Canada, M1P 2G9</p>
      </div>
    </div>
  );
}

export default Contact;
