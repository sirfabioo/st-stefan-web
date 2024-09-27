import React from 'react';
import '../styles/Contact.css';
import SocialMedia from '../components/SocialMedia';
import CustomNavbar from '../components/CustomNavbar';

const Contact = () => {
  return (
    <>
      <CustomNavbar />
      <div className="contact-container">
        <h2 className="contact-heading">Kontakt</h2>
        
        <div className="contact-details">
          <p>
            <strong>Adresse:</strong><br />
            Hauptstraße 51, 9431 Wolfsberg
          </p>

          <p>
            <strong>Email:</strong><br />
            <a href="mailto:direktion@sport-ms-st-stefan.ksn.at">
              direktion@sport-ms-st-stefan.ksn.at
            </a>
          </p>

          <p>
            <strong>Telefon:</strong><br />
            <a href="tel:+4343523991">04352/3991</a>
          </p>
        </div>

        {/* Social Media Component */}
        <div className="contact-social-media">
          <SocialMedia />
        </div>
      </div>
    </>
  );
};

export default Contact;
