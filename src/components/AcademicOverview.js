import React, { useState } from 'react';
import '../styles/AcademicOverview.css';

const subjects = [
  { title: 'Mathematik', content: 'Förderung analytischer Fähigkeiten und Problemlösung.' },
  { title: 'Sprachen', content: 'Beherrschung mehrerer Sprachen zur kulturellen Diversität.' },
  { title: 'Sport', content: 'Physische Fitness und Wettkampfgeist.' },
  { title: 'Naturwissenschaften', content: 'Experimentieren und Entdecken.' },
];

const AcademicOverview = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleContent = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="academic-overview-section">
      <h2>Akademische Übersicht</h2>
      <div className="accordion">
        {subjects.map((subject, index) => (
          <div className="accordion-item" key={index}>
            <div className="accordion-header" onClick={() => toggleContent(index)}>
              {subject.title}
            </div>
            <div className={`accordion-content ${activeIndex === index ? 'open' : ''}`}>
              {subject.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicOverview;
