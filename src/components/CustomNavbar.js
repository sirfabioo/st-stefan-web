import React, { useState, useEffect } from 'react';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase'; // Import your Firebase auth instance
import '../styles/CustomNavbar.css';
import LoginButton from './LoginButton';

const CustomNavbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check Firebase Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  return (
    <BSNavbar expand="lg" className="custom-navbar py-3" bg="white" variant="light">
      <Container fluid className="d-flex justify-content-between align-items-center">
        {/* Logo */}
        <BSNavbar.Brand href="/" className="d-flex align-items-center">
          <img src="/logo.png" height="50" alt="School Logo" className="d-inline-block align-top" />
        </BSNavbar.Brand>

        {/* Hamburger Menu Toggle */}
        <BSNavbar.Toggle aria-controls="navbar-responsive" />

        {/* Links and Login/Dashboard */}
        <BSNavbar.Collapse id="navbar-responsive">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/schoolinfo">Schule</Nav.Link>
            <Nav.Link as={Link} to="/teachers">Über uns</Nav.Link>
            <Nav.Link as={Link} to="/classes">Klassen</Nav.Link>
            <Nav.Link as={Link} to="/blog">News</Nav.Link>
            <Nav.Link as={Link} to="/calendar">Termine</Nav.Link>
            <Nav.Link as={Link} to="/gallery">Fotos</Nav.Link>
            <Nav.Link as={Link} to="/contact">Kontakt</Nav.Link>
            {isAuthenticated ? (
              <Nav.Link as={Link} to="/admin" className="login-btn">Dashboard</Nav.Link>
            ) : (
              <LoginButton />
            )}
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default CustomNavbar;
