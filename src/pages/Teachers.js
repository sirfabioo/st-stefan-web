import React from 'react';
import '../styles/Teachers.css'; // New CSS file
import { IoPersonCircleSharp } from 'react-icons/io5';
import CustomNavbar from '../components/CustomNavbar'; // Assuming you want to reuse the custom navbar
import Footer from '../components/Footer'; // Assuming you want to reuse the footer

const teachers = [
  {
      name: 'Jürgen Nickel',
      photo: '/director.jpg',
      bio: 'Direktor',
      officeHours: '08:00 bis 10:00 Uhr',
      subjects: ['Schulmanagement', 'Mathematik'],
      shortBio: 'Jürgen leitet die Schule mit viel Engagement und einer Vision für eine zukunftsorientierte Bildung.'
  },
  {
      name: 'Daniela Unterholzer',
      photo: '/deputy-director.jpg',
      bio: 'Stellv. Direktorin',
      officeHours: '09:00 bis 11:00 Uhr',
      subjects: ['Englisch', 'Biologie', 'Informatik'],
      shortBio: 'Daniela ist seit 10 Jahren an unserer Schule und engagiert sich für die Entwicklung von jungen Talenten.'
  },
  {
      name: 'Prof. Mag. Natalie Arzberger',
      photo: '/teacher1.jpg',
      bio: 'Lehrerin',
      officeHours: '10:00 bis 12:00 Uhr',
      subjects: ['Deutsch', 'Englisch'],
      shortBio: 'Natalie begeistert ihre Schüler mit kreativen Lehrmethoden und inspirierenden Geschichten.'
  },
  {
      name: 'Prof. Anja Daveid',
      photo: '/teacher2.jpg',
      bio: 'Lehrerin',
      officeHours: '10:00 bis 12:00 Uhr',
      subjects: ['Kunst', 'Mathematik'],
      shortBio: 'Anja verbindet Kunst und Mathematik, um den Schülern neue Perspektiven zu bieten.'
  },
  {
      name: 'Prof. Sandra Dreier',
      photo: '/teacher3.jpg',
      bio: 'Lehrerin',
      officeHours: '10:00 bis 12:00 Uhr',
      subjects: ['Biologie', 'Sport'],
      shortBio: 'Sandra motiviert ihre Schüler zu einem gesunden und aktiven Lebensstil.'
  },
  {
      name: 'Prof. Victoria Freidl',
      photo: '/teacher4.jpg',
      bio: 'Lehrerin',
      officeHours: '11:00 bis 13:00 Uhr',
      subjects: ['Deutsch', 'Französisch'],
      shortBio: 'Victoria begeistert ihre Schüler für Sprachen und kulturellen Austausch.'
  },
  {
      name: 'Robert Haberfellner',
      photo: '/teacher5.jpg',
      bio: 'Lehrer',
      officeHours: '11:00 bis 13:00 Uhr',
      subjects: ['Mathematik', 'Physik'],
      shortBio: 'Robert ist ein erfahrener Mathematiklehrer und bringt komplexe Themen verständlich näher.'
  },
  {
      name: 'Sevala Halilovic',
      photo: '/teacher6.jpg',
      bio: 'Lehrerin',
      officeHours: '12:00 bis 14:00 Uhr',
      subjects: ['Chemie', 'Biologie'],
      shortBio: 'Sevala inspiriert ihre Schüler mit spannenden Experimenten und innovativen Ideen.'
  },
  {
      name: 'Prof. Andrea Haßler',
      photo: '/teacher7.jpg',
      bio: 'Lehrerin',
      officeHours: '13:00 bis 15:00 Uhr',
      subjects: ['Englisch', 'Geschichte'],
      shortBio: 'Andrea liebt es, Geschichte und Sprache miteinander zu verbinden.'
  },
  {
      name: 'Tatjana Igerc',
      photo: '/teacher8.jpg',
      bio: 'Lehrerin',
      officeHours: '14:00 bis 16:00 Uhr',
      subjects: ['Geographie', 'Englisch'],
      shortBio: 'Tatjana vermittelt den Schülern ein tiefes Verständnis der Welt durch Geographie.'
  },
  {
      name: 'Susanne Kopp-Jörke',
      photo: '/teacher9.jpg',
      bio: 'Lehrerin',
      officeHours: '15:00 bis 17:00 Uhr',
      subjects: ['Deutsch', 'Kunst'],
      shortBio: 'Susanne fördert die Kreativität und Ausdrucksfähigkeit ihrer Schüler.'
  },
  {
      name: 'Prof. Sabrina Stefanie Koroschetz',
      photo: '/teacher10.jpg',
      bio: 'Lehrerin',
      officeHours: '08:00 bis 10:00 Uhr',
      subjects: ['Biologie', 'Sport'],
      shortBio: 'Sabrina motiviert ihre Schüler, körperlich und geistig fit zu bleiben.'
  },
  {
      name: 'Barbara Leopold-Kirisits',
      photo: '/teacher11.jpg',
      bio: 'Lehrerin',
      officeHours: '09:00 bis 11:00 Uhr',
      subjects: ['Musik', 'Mathematik'],
      shortBio: 'Barbara kombiniert Mathematik und Musik, um Schülern neue Denkweisen zu vermitteln.'
  },
  {
      name: 'Prof. Verena Maria Lubi',
      photo: '/teacher12.jpg',
      bio: 'Lehrerin',
      officeHours: '10:00 bis 12:00 Uhr',
      subjects: ['Englisch', 'Kunst'],
      shortBio: 'Verena begeistert ihre Schüler mit kreativen Projekten im Kunst- und Englischunterricht.'
  },
  {
      name: 'Klaudija Marjanovic',
      photo: '/teacher13.jpg',
      bio: 'Lehrerin',
      officeHours: '11:00 bis 13:00 Uhr',
      subjects: ['Deutsch', 'Geographie'],
      shortBio: 'Klaudija inspiriert ihre Schüler mit spannenden Unterrichtseinheiten in Geographie und Deutsch.'
  },
];

const Teachers = () => {
  return (
    <>
      <CustomNavbar />
      <div className="teachers-page-container">
        <h2 className="teachers-page-heading">Unser Lehrteam</h2>
        <div className="teachers-grid">
          {teachers.map((teacher, index) => (
            <div className="teacher-card-variant" key={index}>
              <IoPersonCircleSharp className="icon-style" />
              <h4>{teacher.name}</h4>
              <p className="teacher-bio">{teacher.bio}</p>

              {/* Office hours */}
              <p><strong>Sprechstunden:</strong> {teacher.officeHours}</p>

              {/* Subjects */}
              <p><strong>Unterrichtsfächer:</strong> {teacher.subjects.join(', ')}</p>

              {/* Short bio */}
              <p className="teacher-short-bio">{teacher.shortBio}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Teachers;
