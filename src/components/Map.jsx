import React from 'react';
import '/src/styles/Map.css';

const Map = () => {
  return (
    <div className="map-container">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.6984924379934!2d-79.2786343845459!3d43.75162117911637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d340e90f1f37%3A0x4c75f2f1c56b5b34!2s1530%20Birchmount%20Rd%20%237%2C%20Scarborough%2C%20ON%20M1P%202G9%2C%20Canada!5e0!3m2!1sen!2sph!4v1702845112381!5m2!1sen!2sph"
        width="550"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Location"
    ></iframe>

    </div>
  );
};

export default Map;

