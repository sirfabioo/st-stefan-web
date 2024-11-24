import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Logout from './Logout';
import '../styles/Admin.css';
import CustomNavbar from '../components/CustomNavbar';

const Admin = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check if the user is authenticated, if not redirect to login
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Set logged-in user
      } else {
        alert('You need to be logged in to access the admin dashboard');
        navigate('/login'); // Redirect to login if not authenticated
      }
    });
    return unsubscribe; // Clean up the observer on component unmount
  }, [navigate]);

  if (!user) return <p className="loading-text">Loading...</p>; // Show loading while checking auth status

  return (
    <div>
      <CustomNavbar />
      <div className="admin-container">
        <h2 className="admin-heading">Admin Dashboard</h2>
        <p className="admin-welcome">Welcome, {user.email}</p>

        <div className="admin-links">
          <ul>
            <li>
              <Link to="/create-blog" className="admin-link">Blogeinträge</Link>
            </li>
            <li>
              <Link to="/upload-gallery" className="admin-link">Bilder hochladen und bearbeiten</Link>
            </li>
            <li>
              <Link to="/admin/classes" className="admin-link">Klassen bearbeiten</Link>
            </li>
            <li>
              <Link to="/admin-calendar" className="admin-link">Terminkalender</Link>
            </li>
          </ul>
        </div>

        <div className="admin-logout">
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default Admin;
