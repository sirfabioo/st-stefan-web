import React from 'react';
import '../styles/Teachers.css'; // New CSS file
import { IoPersonCircleSharp } from 'react-icons/io5';
import CustomNavbar from '../components/CustomNavbar'; // Assuming you want to reuse the custom navbar
import Footer from '../components/Footer'; // Assuming you want to reuse the footer
import lehrerfoto from '../images/lehrerfoto.jpg'; // Assuming you have the image file

const teachers = [
  {
      name: 'Jürgen Nickel',
      photo: '/director.jpg',
      bio: 'Direktor',
      officeHours: '',
      subjects: [''],
      shortBio: 'Jürgen leitet die Schule mit viel Engagement und einer Vision für eine zukunftsorientierte Bildung.',
      emailAdress: 'juergen.nickel@sport-ms-st-stefan.ksn.at'
  },
  {
    name: 'Daniela Unterholzer',
    photo: '/deputy-director.jpg',
    bio: 'Stellv. Direktorin',
    officeHours: 'Montag, 3. Stunde',
    subjects: ['Lorem Ipsum'],
    emailAdress: 'daniela.unterholzer@sport-ms-st-stefan.ksn.at',
    shortBio: 'Daniela ist seit 10 Jahren an unserer Schule und engagiert sich für die Entwicklung von jungen Talenten.'
  },
  {
    name: 'Natalie Arzberger',
    photo: '/teacher1.jpg',
    bio: 'Lehrerin',
    officeHours: 'Dienstag, 4. Stunde',
    subjects: ['Lorem Ipsum'],
    emailAdress: 'natalie.arzberger@sport-ms-st-stefan.ksn.at',
    shortBio: 'Natalie begeistert ihre Schüler mit kreativen Lehrmethoden und inspirierenden Geschichten.'
  },
  {
    name: 'Anja Daveid',
    photo: '/teacher2.jpg',
    bio: 'Lehrerin',
    officeHours: 'Dienstag, 5. Stunde',
    subjects: ['Lorem Ipsum'],
    emailAdress: 'anja.daveid@sport-ms-st-stefan.ksn.at',
    shortBio: 'Anja verbindet Kunst und Mathematik, um den Schülern neue Perspektiven zu bieten.'
  },
  {
    name: 'Sandra Dreier',
    photo: '/teacher3.jpg',
    bio: 'Lehrerin',
    officeHours: 'Mittwoch, 3. Stunde',
    subjects: ['Lorem Ipsum'],
    emailAdress: 'sandra.dreier@sport-ms-st-stefan.ksn.at',
    shortBio: 'Sandra motiviert ihre Schüler zu einem gesunden und aktiven Lebensstil.'
  },
  {
    name: 'Victoria Freidl',
    photo: '/teacher4.jpg',
    bio: 'Lehrerin',
    officeHours: 'Donnerstag, 2. Stunde',
    subjects: ['Lorem Ipsum'],
    emailAdress: 'victoria.freidl@sport-ms-st-stefan.ksn.at',
    shortBio: 'Victoria begeistert ihre Schüler für Sprachen und kulturellen Austausch.'
  },
  {
    name: 'Heimo Fürpaß',
    photo: '/teacher4.jpg',
    bio: 'Lehrer',
    officeHours: 'Montag, 4. Stunde',
    subjects: ['Lorem Ipsum'],
    emailAdress: 'heimo.fuerpass@sport-ms-st-stefan.ksn.at',
    shortBio: 'Lorem ipsum dolor sit am erat, consectetur adipiscing elit.'
  },
  {
    name: 'Robert Haberfellner',
    photo: '/teacher5.jpg',
    bio: 'Lehrer',
    officeHours: 'Mittwoch, 2. Stunde',
    subjects: ['Lorem Ipsum'],
    emailAdress: 'robert.haberfellner@sport-ms-st-stefan.ksn.at',
    shortBio: 'Robert ist ein erfahrener Mathematiklehrer und bringt komplexe Themen verständlich näher.'
  },
  {
    name: 'Andrea Haßler',
    photo: '/teacher4.jpg',
    bio: 'Lehrerin',
    officeHours: 'Freitag, 1. Stunde',
    subjects: ['Lorem Ipsum'],
    emailAdress: 'andrea.hassler@sport-ms-st-stefan.ksn.at',
    shortBio: 'Lorem ipsum dolor sit am erat, consectetur adipiscing elit.'
  },
  {
    name: 'Tatjana Igerc',
    photo: '/teacher8.jpg',
    bio: 'Lehrerin',
    officeHours: 'Montag, 3. Stunde',
    subjects: ['Lorem Ipsum'],
    emailAdress: 'tatjana.igerc@sport-ms-st-stefan.ksn.at',
    shortBio: 'Tatjana vermittelt den Schülern ein tiefes Verständnis der Welt durch Geographie.'
  },
  {
    name: 'Susanne Kopp-Jörke',
    photo: '/teacher9.jpg',
    bio: 'Lehrerin',
    officeHours: 'Dienstag, 4. Stunde',
    subjects: ['Lorem Ipsum'],
    emailAdress: 'susanne.kopp-joerke@sport-ms-st-stefan.ksn.at',
    shortBio: 'Susanne fördert die Kreativität und Ausdrucksfähigkeit ihrer Schüler.'
  },
  {
    name: 'Sabrina Stefanie Koroschetz',
    photo: '/teacher10.jpg',
    bio: 'Lehrerin',
    officeHours: 'Montag, 2. Stunde',
    subjects: ['Lorem Ipsum'],
    emailAdress: 'sabrina.koroschetz@sport-ms-st-stefan.ksn.at',
    shortBio: 'Sabrina motiviert ihre Schüler, körperlich und geistig fit zu bleiben.'
  },
  {
    name: 'Barbara Leopold-Kirisits',
    photo: '/teacher11.jpg',
    bio: 'Lehrerin',
    officeHours: 'Dienstag, 2. Stunde',
    subjects: ['Lorem Ipsum'],
    emailAdress: 'barbara.leopold-kirisits@sport-ms-st-stefan.ksn.at',
    shortBio: 'Barbara kombiniert Mathematik und Musik, um Schülern neue Denkweisen zu vermitteln.'
  },
  {
    name: 'Verena Maria Lubi',
    photo: '/teacher12.jpg',
    bio: 'Lehrerin',
    officeHours: 'Dienstag, 1. Stunde',
    subjects: ['Lorem Ipsum'],
    emailAdress: 'verena.lubi@sport-ms-st-stefan.ksn.at',
    shortBio: 'Verena begeistert ihre Schüler mit kreativen Projekten im Kunst- und Englischunterricht.'
  },
  {
    name: 'Klaudija Marjanovic',
    photo: '/teacher13.jpg',
    bio: 'Lehrerin',
    officeHours: 'Dienstag, 2. Stunde',
    subjects: ['Lorem Ipsum'],
    emailAdress: 'klaudija.marjanovic@sport-ms-st-stefan.ksn.at',
    shortBio: 'Klaudija inspiriert ihre Schüler mit spannenden Unterrichtseinheiten in Geographie und Deutsch.'
  },
  {
    name: 'Nina Maierhofer',
    photo: '/teacher13.jpg',
    bio: 'Lehrerin',
    officeHours: 'Montag, 5. Stunde',
    subjects: ['Lorem Ipsum'],
    emailAdress: 'nina.maierhofer@sport-ms-st-stefan.ksn.at',
    shortBio: 'Lorem ipsum dolor sit am erat, consectetur adipiscing elit.'
  },
  {
    name: 'Silke Miklautsch',
    photo: '/teacher13.jpg',
    bio: 'Lehrerin',
    officeHours: 'Dienstag, 5. Stunde',
    subjects: ['Lorem Ipsum'],
    emailAdress: 'silke.miklautsch@sport-ms-st-stefan.ksn.at',
    shortBio: 'Lorem ipsum dolor sit am erat, consectetur adipiscing elit.'
  },
  {
    name: 'Monika Pauscha',
    photo: '/teacher13.jpg',
    bio: 'Lehrerin',
    officeHours: 'Dienstag, 5. Stunde',
    subjects: ['Lorem Ipsum'],
    emailAdress: 'monika.pauscha@sport-ms-st-stefan.ksn.at',
    shortBio: 'Lorem ipsum dolor sit am erat, consectetur adipiscing elit.'
  },
  {
    name: 'Eva Pototschnig-Stuck',
    photo: '/teacher13.jpg',
    bio: 'Lehrerin',
    officeHours: 'Dienstag, 2. Stunde',
    subjects: ['Lorem Ipsum'],
    emailAdress: 'eva.pototschnig-stuck@sport-ms-st-stefan.ksn.at',
    shortBio: 'Lorem ipsum dolor sit am erat, consectetur adipiscing elit.'
  },
  {
    name: 'Alexander Radl',
    photo: '/teacher13.jpg',
    bio: 'Lehrer',
    officeHours: 'Dienstag, 3. Stunde',
    subjects: ['Lorem Ipsum'],
    emailAdress: 'alexander.radl@sport-ms-st-stefan.ksn.at',
    shortBio: 'Lorem ipsum dolor sit am erat, consectetur adipiscing elit.'
  },
  {
    name: 'Gernot Rainer',
    photo: '/teacher13.jpg',
    bio: 'Lehrer',
    officeHours: 'Montag, 5. Stunde',
    subjects: ['Lorem Ipsum'],
    emailAdress: 'placerholder@email.com',
    shortBio: 'Lorem ipsum dolor sit am erat, consectetur adipiscing elit.'
  },
  {
    name: 'Maria Schmölzer',
    photo: '/teacher13.jpg',
    bio: 'Lehrerin',
    officeHours: 'Donnerstag, 2. Stunde',
    subjects: ['Lorem Ipsum'],
    emailAdress: 'maria.schmoelzer@sport-ms-st-stefan.ksn.at',
    shortBio: 'Lorem ipsum dolor sit am erat, consectetur adipiscing elit.'
  },
  {
    name: 'Beate Zmollnig',
    photo: '/teacher14.jpg',
    bio: 'Lehrerin',
    officeHours: 'Dienstag, 2. Stunde',
    subjects: ['Lorem Ipsum'],
    emailAdress: 'beate.zmollnig@sport-ms-st-stefan.ksn.at',
    shortBio: 'Lorem ipsum dolor sit am erat, consectetur adipiscing elit.'
  },
];

// Schulwart + Team data
const schulwartTeam = [
  {
    name: 'Max Mustermann',
    photo: '/janitor1.jpg',
    bio: 'Schulwart',
    emailAdress: 'janitor@school.com',
    shortBio: 'Max sorgt dafür, dass die Schule immer sauber und gut organisiert bleibt.'
  },
  {
    name: 'Anna Müller',
    photo: '/team1.jpg',
    bio: 'Teammitglied',
    emailAdress: 'anna@school.com',
    shortBio: 'Anna unterstützt den Schulwart und trägt zur Instandhaltung der Schule bei.'
  },
  {
    name: 'Maximilian Mustermann',
    photo: '/janitor1.jpg',
    bio: 'Schulwart',
    emailAdress: 'janitor@school.com',
    shortBio: 'Maximilian sorgt dafür, dass die Schule immer sauber und gut organisiert bleibt.'
  },
  {
    name: 'Mario Müller',
    photo: '/team1.jpg',
    bio: 'Teammitglied',
    emailAdress: 'anna@school.com',
    shortBio: 'Mario unterstützt den Schulwart und trägt zur Instandhaltung der Schule bei.'
  },
  // Add more team members as needed...
];


const Teachers = () => {
  return (
    <>
      <CustomNavbar />
      <div className="teachers-page-container">
        <h2 className="teachers-page-heading">Kollegium</h2>
        {/* Display team photo */}
        <img src={lehrerfoto} alt="Lehrerfoto" className="lehrer-foto" />

        {/* Render Jürgen Nickel's card separately */}
        <div className="teacher-card-variant special-card">
          <IoPersonCircleSharp className="icon-style" />
          <h4>{teachers[0].name}</h4>
          <p className="teacher-bio">{teachers[0].bio}</p>
          <p><strong>Email:</strong> <a href={`mailto:${teachers[0].emailAdress}`}>{teachers[0].emailAdress}</a></p>
          <p className="teacher-short-bio">{teachers[0].shortBio}</p>
        </div>

        {/* Render the rest of the teachers */}
        <div className="teachers-grid">
          {teachers.slice(1).map((teacher, index) => (
            <div className="teacher-card-variant" key={index}>
              <IoPersonCircleSharp className="icon-style" />
              <h4>{teacher.name}</h4>
              <p className="teacher-bio">{teacher.bio}</p>

              {/* Office hours */}
              {teacher.officeHours && (
                <p><strong>Sprechstunden:</strong> {teacher.officeHours}</p>
              )}

              {/* Subjects */}
              {teacher.subjects.length > 0 && (
                <p><strong>Unterrichtsfächer:</strong> {teacher.subjects.join(', ')}</p>
              )}

              {/* Email */}
              <p><strong>Email:</strong> <a href={`mailto:${teacher.emailAdress}`}>{teacher.emailAdress}</a></p>

              {/* Short bio */}
              <p className="teacher-short-bio">{teacher.shortBio}</p>
            </div>
          ))}
        </div>

        {/* Schulwart + Team section */}
        <div className="schulwart-section">
          <h2 className="schulwart-heading">Schulwart + Team</h2>
          <div className="schulwart-grid">
            {schulwartTeam.map((member, index) => (
              <div className="teacher-card-variant" key={index}>
                <IoPersonCircleSharp className="icon-style" />
                <h4>{member.name}</h4>
                <p className="teacher-bio">{member.bio}</p>
                <p><strong>Email:</strong> <a href={`mailto:${member.emailAdress}`}>{member.emailAdress}</a></p>
                <p className="teacher-short-bio">{member.shortBio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Teachers;
