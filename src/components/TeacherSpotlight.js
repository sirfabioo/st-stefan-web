import React from 'react';
import '../styles/TeacherSpotlight.css';
import { IoPersonCircleSharp } from "react-icons/io5";

const teachers = [
  { name: 'Jürgen Nickel', photo: '/director.jpg', bio: 'Direktor' },
  { name: 'Daniela Unterholzer', photo: '/deputy-director.jpg', bio: 'Stellv. Direktorin' },
  { name: 'Natalie Arzberger', photo: '/teacher1.jpg', bio: 'Lehrerin' },
  { name: 'Anja Daveid', photo: '/teacher2.jpg', bio: 'Lehrerin' },
  { name: 'Sandra Dreier', photo: '/teacher3.jpg', bio: 'Lehrerin' },
  { name: 'Victoria Freidl', photo: '/teacher4.jpg', bio: 'Lehrerin' },
  { name: 'Heimo Fürpaß', photo: '/teacher4.jpg', bio: 'Lehrer' },
  { name: 'Robert Haberfellner', photo: '/teacher5.jpg', bio: 'Lehrer' },
  { name: 'Andrea Haßler', photo: '/teacher4.jpg', bio: 'Lehrerin' },
  { name: 'Tatjana Igerc', photo: '/teacher8.jpg', bio: 'Lehrerin' },
  { name: 'Susanne Kopp-Jörke', photo: '/teacher9.jpg', bio: 'Lehrerin' },
  { name: 'Sabrina Stefanie Koroschetz', photo: '/teacher10.jpg', bio: 'Lehrerin' },
  { name: 'Barbara Leopold-Kirisits', photo: '/teacher11.jpg', bio: 'Lehrerin' },
  { name: 'Verena Maria Lubi', photo: '/teacher12.jpg', bio: 'Lehrerin' },
  { name: 'Klaudija Marjanovic', photo: '/teacher13.jpg', bio: 'Lehrerin' },
  { name: 'Nina Maierhofer', photo: '/teacher13.jpg', bio: 'Lehrerin' },
  { name: 'Silke Miklautsch', photo: '/teacher13.jpg', bio: 'Lehrerin' },
  { name: 'Monika Pauscha', photo: '/teacher13.jpg', bio: 'Lehrerin' },
  { name: 'Eva Pototschnig-Stuck', photo: '/teacher13.jpg', bio: 'Lehrerin' },
  { name: 'Alexander Radl', photo: '/teacher13.jpg', bio: 'Lehrer' },
  { name: 'Gernot Rainer', photo: '/teacher13.jpg', bio: 'Lehrer' },
  { name: 'Maria Schmölzer', photo: '/teacher13.jpg', bio: 'Lehrerin' },
  { name: 'Beate Zmollnig', photo: '/teacher14.jpg', bio: 'Lehrerin' }
];

const TeacherSpotlight = () => {
  return (
    <div className="teacher-spotlight-section">
      <h2>Unser Team</h2>
      <div className="teacher-grid">
        {teachers.slice(0, 23).map((teacher, index) => ( // Limitiert die Anzeige auf 10 Lehrer
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
