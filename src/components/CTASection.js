import React from 'react';
import '../styles/CTASection.css';

const CTASection = () => {
  return (
    <div className="cta-section">
      <p>Kontaktieren Sie uns und erfahren Sie mehr über unsere Schule und unser Bildungsprogramm.</p>
      
      {/* Adjusted button to use mailto link */}
      <a href="mailto:direktion@sport-ms-st-stefan.ksn.at" className="cta-btn">
        Kontaktieren Sie uns
      </a>
    </div>
  );
};

export default CTASection;
