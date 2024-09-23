import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import '../styles/SocialMedia.css'; // Custom CSS

const SocialMedia = () => {
  return (
    <div className="social-media-container">
      <h3>Besuch unsere Schule!</h3>
      <div className="social-icons">
        <a href="https://www.instagram.com/sportmsststefan/" target="_blank" rel="noopener noreferrer" className="social-link">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.facebook.com/NSMSSt.Stefan/?locale=de_DE" target="_blank" rel="noopener noreferrer" className="social-link">
          <FontAwesomeIcon icon={faFacebookF} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
