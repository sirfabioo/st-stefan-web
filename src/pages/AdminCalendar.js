import Footer from '../components/Footer';
import CustomNavbar from '../components/CustomNavbar';
import React, { useState, useEffect } from 'react';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import DatePicker from 'react-datepicker';
import '../styles/Calendar.css'; 
import 'react-datepicker/dist/react-datepicker.css';

const AdminCalendar = () => {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    start: new Date(),
    end: new Date(),
    category: 'Exams',
    color: '#3174ad',
  });
  const [editingEvent, setEditingEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, 'events'));
      const eventsData = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          start: data.start.toDate(),
          end: data.end.toDate(),
        };
      });
      setEvents(eventsData);
    };
    fetchEvents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, start, end, category, color } = formData;

    const eventPayload = {
      title,
      description,
      start: start instanceof Date ? start : new Date(start),
      end: end instanceof Date ? end : new Date(end),
      category,
      color,
    };

    if (editingEvent) {
      await updateDoc(doc(db, 'events', editingEvent.id), eventPayload);
    } else {
      await addDoc(collection(db, 'events'), eventPayload);
    }

    setEditingEvent(null);
    setFormData({
      title: '',
      description: '',
      start: new Date(),
      end: new Date(),
      category: 'Exams',
      color: '#3174ad',
    });
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    setFormData({
      ...event,
      start: new Date(event.start),
      end: new Date(event.end),
    });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'events', id));
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div>
      <CustomNavbar />
      <div className="admin-calendar-container">
        <h2>Admin Calendar Management</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          ></textarea>
          <DatePicker
            selected={formData.start}
            onChange={(date) => setFormData({ ...formData, start: date })}
            placeholderText="Start Date"
          />
          <DatePicker
            selected={formData.end}
            onChange={(date) => setFormData({ ...formData, end: date })}
            placeholderText="End Date"
          />
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            <option value="Exams">Schularbeiten</option>
            <option value="School Activities">Schulaktivitäten</option>
            <option value="Class Activities">Klassenaktivitäten</option>
            <option value="Others">Sonstiges</option>
            <option value="Holidays">Ferien</option>
            <option value="Sports">Sport</option>
            <option value="Projects">Projekt</option>
          </select>
          <input
            type="color"
            value={formData.color}
            onChange={(e) => setFormData({ ...formData, color: e.target.value })}
          />
          <button type="submit">{editingEvent ? 'Update Event' : 'Add Event'}</button>
        </form>

        <div className="event-list">
          <ul>
            {events.map((event) => (
              <li key={event.id}>
                <span>
                  {event.title} ({event.category})
                </span>
                <div>
                  <button className="edit-button" onClick={() => handleEdit(event)}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(event.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminCalendar;
