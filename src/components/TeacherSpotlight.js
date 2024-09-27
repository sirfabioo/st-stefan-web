import React from 'react';
import '../styles/TeacherSpotlight.css';
import { IoPersonCircleSharp } from "react-icons/io5";

const teachers = [
    { name: 'Daniela Unterholzer', photo: '/teacher1.jpg', bio: 'Stellv. Direktorin' },
    { name: 'Lehrer 1', photo: '/teacher2.jpg', bio: 'Hier könnte deine Beschreibung stehen.' },
    { name: 'Lehrerin 2', photo: '/teacher3.jpg', bio: 'Hier könnte deine Beschreibung stehen.' },
    { name: 'Lehrer 3', photo: '/teacher4.jpg', bio: 'Hier könnte deine Beschreibung stehen.' },
    { name: 'Lehrerin 4', photo: '/teacher5.jpg', bio: 'Hier könnte deine Beschreibung stehen.' },
    { name: 'Lehrer 5', photo: '/teacher6.jpg', bio: 'Hier könnte deine Beschreibung stehen.' },
    { name: 'Lehrerin 6', photo: '/teacher7.jpg', bio: 'Hier könnte deine Beschreibung stehen.' },
    { name: 'Lehrer 7', photo: '/teacher8.jpg', bio: 'Hier könnte deine Beschreibung stehen.' },
    { name: 'Lehrerin 8', photo: '/teacher9.jpg', bio: 'Hier könnte deine Beschreibung stehen.' },
    { name: 'Lehrer 9', photo: '/teacher10.jpg', bio: 'Hier könnte deine Beschreibung stehen.' },
    { name: 'Lehrerin 10', photo: '/teacher11.jpg', bio: 'Hier könnte deine Beschreibung stehen.' },
    { name: 'Lehrer 11', photo: '/teacher12.jpg', bio: 'Hier könnte deine Beschreibung stehen.' },
];

const TeacherSpotlight = () => {
  return (
    <div className="teacher-spotlight-section">
      <h2>Unser Lehrteam</h2>
      <div className="teacher-grid">
        {teachers.map((teacher, index) => (
          <div className="teacher-card" key={index}>
            <IoPersonCircleSharp className='icon-style'/>
            <h4>{teacher.name}</h4>
            <p>{teacher.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherSpotlight;
