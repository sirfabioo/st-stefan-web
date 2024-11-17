import React from 'react';
import '../styles/Impressum.css';
import CustomNavbar from '../components/CustomNavbar';
import Footer from '../components/Footer';

const Impressum = () => {
  return (
    <div>
        <CustomNavbar />
        <div className="impressum-container">
        <h1>Impressum</h1>
        <p>
            <strong>Betreiber der Website:</strong>
        </p>
        <p>
            Sportmittelschule St. Stefan Christine Lavant<br />
            Hauptstraße 51 <br />
            9431 Wolfsberg <br />
            Österreich
        </p>
        <p>
            <strong>Kontakt:</strong>
        </p>
        <p>
            Telefon: 04352/3991 <br />
            E-Mail: <a href="mailto:direktion@sport-ms-st-stefan.ksn.at">direktion@sport-ms-st-stefan.ksn.at</a>
        </p>
        <p>
            <strong>Vertretungsberechtigte Person:</strong>
        </p>
        <p>Jürgen Nickel (Direktor)</p>
        <p>
            <strong>Haftungsausschluss:</strong>
        </p>
        <p>
            Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
        </p>
        <p>
            <strong>Urheberrecht:</strong>
        </p>
        <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>
        </div>
        <Footer />
    </div>
  );
};

export default Impressum;
