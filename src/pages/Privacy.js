import React from 'react';
import '../styles/Privacy.css';
import CustomNavbar from '../components/CustomNavbar';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <div className="page-container">
      {/* Navbar */}
      <CustomNavbar />

      {/* Privacy content */}
      <div className="main-content">
        <div className="privacy-container-variant">
          <h1>Datenschutzerklärung</h1>
          <p>
            Wir legen großen Wert auf den Schutz Ihrer persönlichen Daten. Nachfolgend informieren wir Sie über die
            Verarbeitung personenbezogener Daten auf unserer Website.
          </p>

          <section>
            <h2>Verantwortliche Stelle</h2>
            <p>
              Sportmittelschule St. Stefan <br />
              Hauptstraße 51, 9431 Wolfsberg <br />
              Telefon: 04352/3991 <br />
              E-Mail: <a href="mailto:direktion@sport-ms-st-stefan.ksn.at">direktion@sport-ms-st-stefan.ksn.at</a>
            </p>
          </section>

          <section>
            <h2>Datenerhebung und Nutzung</h2>
            <p>Wir erheben personenbezogene Daten nur im Rahmen der gesetzlichen Bestimmungen.</p>
          </section>

          <section>
            <h2>Ihre Rechte</h2>
            <p>
              Sie haben das Recht, Auskunft über Ihre gespeicherten Daten zu erhalten, sowie das Recht auf Löschung.
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Privacy;
