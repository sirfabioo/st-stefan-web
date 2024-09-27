import React from 'react';
import '../styles/Teachers.css'; // New CSS file
import { IoPersonCircleSharp } from 'react-icons/io5';
import CustomNavbar from '../components/CustomNavbar'; // Assuming you want to reuse the custom navbar

const teachers = [
    {
        name: 'Daniela Unterholzer',
        photo: '/teacher1.jpg',
        bio: 'Stellv. Direktorin',
        officeHours: '09:00 bis 11:00 Uhr',
        subjects: ['Englisch', 'Biologie', 'Informatik'],
        shortBio: 'Daniela ist seit 10 Jahren an unserer Schule und engagiert sich für die Entwicklung von jungen Talenten.'
    },
    {
        name: 'Lehrer 1',
        photo: '/teacher2.jpg',
        bio: 'Deutsch Lehrer',
        officeHours: '10:00 bis 12:00 Uhr',
        subjects: ['Deutsch', 'Geschichte'],
        shortBio: 'Lehrer 1 liebt es, Geschichte zu unterrichten und junge Köpfe zu inspirieren.'
    },
    {
        name: 'Lehrerin 2',
        photo: '/teacher3.jpg',
        bio: 'Englisch Lehrerin',
        officeHours: '11:00 bis 13:00 Uhr',
        subjects: ['Englisch', 'Französisch'],
        shortBio: 'Lehrerin 2 ist eine begeisterte Englischlehrerin und motiviert ihre Schüler, ihr Bestes zu geben.'
    },
    {
        name: 'Lehrer 3',
        photo: '/teacher4.jpg',
        bio: 'Sportlehrer',
        officeHours: '12:00 bis 14:00 Uhr',
        subjects: ['Sport', 'Biologie'],
        shortBio: 'Lehrer 3 ist ein begeisterter Sportlehrer und motiviert seine Schüler, fit und gesund zu bleiben.'
    },
    {
        name: 'Lehrerin 4',
        photo: '/teacher5.jpg',
        bio: 'Musik Lehrerin',
        officeHours: '13:00 bis 15:00 Uhr',
        subjects: ['Musik', 'Kunst'],
        shortBio: 'Lehrerin 4 ist eine talentierte Musikerin und inspiriert ihre Schüler, ihre kreativen Fähigkeiten zu entfalten.'
    },
    {
        name: 'Lehrer 5',
        photo: '/teacher6.jpg',
        bio: 'Informatik Lehrer',
        officeHours: '14:00 bis 16:00 Uhr',
        subjects: ['Informatik', 'Technik'],
        shortBio: 'Lehrer 5 ist ein erfahrener Informatiklehrer und motiviert seine Schüler, sich für Technologie zu begeistern.'
    },
    {
        name: 'Lehrerin 6',
        photo: '/teacher7.jpg',
        bio: 'Biologie Lehrerin',
        officeHours: '15:00 bis 17:00 Uhr',
        subjects: ['Biologie', 'Chemie'],
        shortBio: 'Lehrerin 6 ist eine leidenschaftliche Biologin und motiviert ihre Schüler, die Wunder der Natur zu entdecken.'
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
            <div className="teacher-card" key={index}>
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
    </>
  );
};

export default Teachers;
