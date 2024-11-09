import React, { useState, useEffect } from 'react';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';  // Import your Firebase auth instance
import '../styles/CustomNavbar.css';
import LoginButton from './LoginButton';

const CustomNavbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check Firebase Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    // Clean up the subscription when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <BSNavbar expand="lg" className="py-3" bg="white" variant="light">
      <Container fluid className="d-flex justify-content-between align-items-center">

        {/* Centered Logo with Text */}
        <div className="logo-container d-flex justify-content-center align-items-center">
          <BSNavbar.Brand href="/" className="d-flex flex-column align-items-center">
            <img
              src="/logo.png"
              height="50"
              alt="School Logo"
              className="d-inline-block align-top"
            />
          </BSNavbar.Brand>
        </div>

        {/* Right-side Links */}
        <div className="nav-container-right d-flex justify-content-end align-items-center">
          <Nav>
            	<Nav.Link as={Link} to="/schoolinfo">Schule</Nav.Link>
              <Nav.Link as={Link} to="/classes">Klassen</Nav.Link>
              <Nav.Link as={Link} to="/teachers">Lehrer</Nav.Link>
              <Nav.Link as={Link} to="/blog">News</Nav.Link>
              <Nav.Link as={Link} to="/gallery">Fotos</Nav.Link>
              <Nav.Link as={Link} to="/contact">Kontakt</Nav.Link>
          </Nav>

          {/* Conditionally Render Button */}
          {isAuthenticated ? (
            <Nav.Link as={Link} to="/admin" className="login-btn">Dashboard</Nav.Link>
          ) : (
            <LoginButton />
          )}
        </div>
      </Container>
    </BSNavbar>
  );
};

export default CustomNavbar;
