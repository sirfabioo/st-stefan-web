import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SchoolProgramShort.css';  // Import the custom styles

const SchoolProgramShort = () => {
  return (
    <div>
      <div className="simple-bar">
        <h2 className="bar-heading">Entdecken Sie unser Schulprogramm</h2>
      </div>

      <div className="program-features">
        {/** Boxes from 1 to 4 */}
        <div className="feature-box">
          <span className="feature-number">1</span>
          <p>Moderne Klassenzimmer und Technologien</p>
        </div>

        <div className="feature-box">
          <span className="feature-number">2</span>
          <p>Vielfältige Sport- und Freizeitangebote</p>
        </div>

        <div className="feature-box">
          <span className="feature-number">3</span>
          <p>Individuelle Förderung der Talente</p>
        </div>

        <div className="feature-box">
          <span className="feature-number">4</span>
          <p>Engagierte Lehrkräfte und Betreuung</p>
        </div>

        {/** Last Box with button */}
        <div className="feature-box">
          <span className="feature-number">5</span>
          <p>Und noch vieles mehr!</p>
          <br></br>
          <Link to="/schoolinfo" className="cta-btn">Mehr erfahren</Link>
        </div>

        
        
      </div>
      <div className='simple-bar-variant gradient'>
          
        </div>

    </div>
  );
};

export default SchoolProgramShort;
