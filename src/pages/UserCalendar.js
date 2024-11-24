import CustomNavbar from '../components/CustomNavbar';
import Footer from '../components/Footer';
import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import '../styles/Calendar.css'; 
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const UserCalendar = () => {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState('All'); // Filter for categories

  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, 'events'));
      const eventsData = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          ...data,
          start: data.start.toDate(), // Convert Firestore timestamp to JavaScript Date
          end: data.end.toDate(),     // Convert Firestore timestamp to JavaScript Date
        };
      });
      setEvents(eventsData);
    };
    fetchEvents();
  }, []);

  // Filter events based on category
  const filteredEvents = filter === 'All' ? events : events.filter((event) => event.category === filter);

  return (
    <div>
      <CustomNavbar />
      <div className="calendar-container">
        <h2>School Calendar</h2>

        {/* Dropdown for filtering */}
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="Exams">Schularbeiten</option>
            <option value="School Activities">Schulaktivitäten</option>
            <option value="Class Activities">Klassenaktivitäten</option>
            <option value="Others">Sonstiges</option>
            <option value="Holidays">Ferien</option>
            <option value="Sports">Sport</option>
            <option value="Projects">Projekt</option>
        </select>

        {/* Render the calendar */}
        <Calendar
          localizer={localizer}
          events={filteredEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600 }}
          eventPropGetter={(event) => ({
            style: { backgroundColor: event.color || '#3174ad' }, // Default color if none specified
          })}
        />
      </div>
      <Footer />
    </div>
  );
};

export default UserCalendar;
