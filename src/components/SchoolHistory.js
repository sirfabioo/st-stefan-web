// src/components/SchoolHistory.js

import React from 'react';
import '../styles/SchoolHistory.css'; // Custom CSS file for styling

const SchoolHistory = () => {
  return (
    <div className="history-section" id="history">
      <h2 className="history-heading">Unsere Geschichte</h2>
      <div className="history-content">
        <p>
          Die Sportmittelschule St. Stefan Christine Lavant wurde vor über 50 Jahren gegründet und hat sich seitdem zu einer der führenden Schulen in der Region entwickelt. Ursprünglich als kleine Bildungseinrichtung gestartet, wuchs die Schule rasch und erweiterte ihre Kapazitäten, um den steigenden Anforderungen gerecht zu werden.
        </p>
        <p>
          Im Laufe der Jahre wurde die Schule mehrfach modernisiert, sowohl in Bezug auf ihre Infrastruktur als auch auf ihr pädagogisches Konzept. Seit den 1990er Jahren liegt ein besonderer Schwerpunkt auf dem Sport, weshalb sie heute als Sportmittelschule bekannt ist. Unsere Schüler haben durch den Sportunterricht nicht nur die Möglichkeit, körperlich fit zu bleiben, sondern auch Teamarbeit, Durchhaltevermögen und Fairness zu lernen.
        </p>
        <p>
          Heute ist die Sportmittelschule St. Stefan stolz darauf, ein vielfältiges Bildungsangebot anzubieten, das sowohl akademische als auch sportliche Exzellenz fördert. Wir sind eine Gemeinschaft von Lehrern, Schülern und Eltern, die gemeinsam daran arbeiten, das Beste aus jedem Kind herauszuholen.
        </p>
      </div>
    </div>
  );
};

export default SchoolHistory;
