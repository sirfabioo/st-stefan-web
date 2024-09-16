import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Logout from './Logout';

const Admin = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check if the user is authenticated, if not redirect to login
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Set logged-in user
      } else {
        navigate('/login'); // Redirect to login if not authenticated
        // Give an alert "You need to be logged in to access the admin dashboard"
        alert('You need to be logged in to access the admin dashboard');
      }
    });
    return unsubscribe; // Clean up the observer on component unmount
  }, [navigate]);

  if (!user) return <p>Loading...</p>; // Show loading while checking auth status

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Welcome, {user.email}</p>
      <ul>
        {/* Links to admin actions */}
        <li>
          <Link to="/create-blog">Create a Blog Post</Link>
        </li>
        <li>
          <Link to="/upload-gallery">Upload Images to Gallery</Link>
        </li>
        <li>
            <Link to="/admin/classes">Manage Class Images</Link>
        </li>
      </ul>
      <Logout />
    </div>
  );
};

export default Admin;
