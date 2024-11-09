import React from 'react';
import '../styles/SchoolValues.css';
import { GiLightBulb } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { FaRunning } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";

const values = [
  { icon: <GiLightBulb className='icon-style' />, title: 'Innovation', description: 'We encourage creative thinking.' },
  { icon: <RiTeamFill className='icon-style' />, title: 'Teamwork', description: 'Collaboration is key to success.' },
  { icon: <FaRunning className='icon-style' />, title: 'Physical Education', description: 'Strong bodies and minds.' },
  { icon: <HiAcademicCap className='icon-style' />, title: 'Academic Excellence', description: 'We strive for the highest academic standards.' },
];

const SchoolValues = () => {
  return (
    <div className="values-section" id="values">
      <h2>Unsere Werte</h2>
      <div className="values-grid">
        {values.map((value, index) => (
          <div className="value-box" key={index}>
            {/* Render the correct icon */}
            {value.icon}
            <h3>{value.title}</h3>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolValues;
