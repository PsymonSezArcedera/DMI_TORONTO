import React from 'react';

import QR from '/src/assets/QR.png'

import '/src/styles/Donation.css';

const Donation = () => {
  return (
    <div className="donation">
      <h1>Support Our Cause</h1>
      <p>We appreciate your generosity. Scan the QR code below to donate:</p>

      <div className="qr-code">
        <img src={QR} alt="qr" className="qr-code-img" />
      </div>
      
    </div>
  );
};

export default Donation;
