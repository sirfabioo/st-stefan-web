import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SchoolProgramShort.css';  // Import the custom styles

const SchoolProgramShort = () => {
  return (
    <div className="program-icons-container">
      <div className="icon-circle">
        <i className="fas fa-book"></i>  {/* First icon */}
      </div>
      <div className="icon-circle">
        <i className="fas fa-chalkboard-teacher"></i>  {/* Second icon */}
      </div>
      <div className="icon-circle">
        <i className="fas fa-basketball-ball"></i>  {/* Third icon */}
      </div>
      <div className="icon-circle">
        <Link to="/schoolinfo" className="cta-btn">Mehr erfahren</Link>  {/* "Mehr erfahren" button */}
      </div>
    </div>
  );
};

export default SchoolProgramShort;
