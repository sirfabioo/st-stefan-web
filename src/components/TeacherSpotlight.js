import React from 'react';
import '../styles/TeacherSpotlight.css';
import { IoPersonCircleSharp } from "react-icons/io5";

const teachers = [
    { name: 'Jürgen Nickel', photo: '/director.jpg', bio: 'Direktor' },
    { name: 'Daniela Unterholzer', photo: '/teacher1.jpg', bio: 'Stellv. Direktorin' },
    { name: 'Prof. Mag. Natalie Arzberger', photo: '/teacher2.jpg', bio: 'Lehrerin für Deutsch und Englisch' },
    { name: 'Prof. Sandra Dreier', photo: '/teacher3.jpg', bio: 'Lehrerin für Biologie und Sport' },
    { name: 'Robert Haberfellner', photo: '/teacher4.jpg', bio: 'Lehrer für Mathematik und Physik' },
    { name: 'Prof. Andrea Haßler', photo: '/teacher5.jpg', bio: 'Lehrerin für Englisch und Geschichte' },
    { name: 'Sevala Halilovic', photo: '/teacher6.jpg', bio: 'Lehrerin für Chemie und Biologie' },
    { name: 'Prof. Verena Maria Lubi', photo: '/teacher7.jpg', bio: 'Lehrerin für Englisch und Kunst' },
    { name: 'Susanne Kopp-Jörke', photo: '/teacher8.jpg', bio: 'Lehrerin für Deutsch und Kunst' },
    { name: 'Prof. Sabrina Stefanie Koroschetz', photo: '/teacher9.jpg', bio: 'Lehrerin für Biologie und Sport' },
];

const TeacherSpotlight = () => {
  return (
    <div className="teacher-spotlight-section">
      <h2>Unser Lehrteam</h2>
      <div className="teacher-grid">
        {teachers.slice(0, 10).map((teacher, index) => ( // Limitiert die Anzeige auf 10 Lehrer
          <div className="teacher-card" key={index}>
            <IoPersonCircleSharp className='icon-style' />
            <h4>{teacher.name}</h4>
            <p>{teacher.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherSpotlight;
