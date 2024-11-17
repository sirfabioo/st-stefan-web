import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Column */}
        <div className="footer-column">
          <h4>Kontakt</h4>
          <p>
            Hauptstraße 51, 9431 Wolfsberg
            <br />
            Telefon: 04352/3991
            <br />
            E-Mail: <a href="mailto:direktion@sport-ms-st-stefan.ksn.at">direktion@sport-ms-st-stefan.ksn.at</a>
          </p>
        </div>

        {/* Links Column */}
        <div className="footer-column">
          <h4>Links</h4>
          <ul>
            <li>
              <Link to="/impressum">Impressum</Link>
            </li>
            <li>
              <Link to="/privacy">Datenschutz</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="footer-divider"></div>

      {/* Creator Section */}
      <div className="footer-creator">
        <p>
          Created by{' '}
          <a
            href="https://github.com/sirfabioo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fabio Unterholzer
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
