import React from 'react';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/CustomNavbar.css'; // Import the custom CSS

const CustomNavbar = () => {
  return (
    <BSNavbar expand="lg" className="py-3" bg="white" variant="light">
      <Container>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          
          {/* Left-side Links */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/schoolinfo">Schule</Nav.Link>
            <Nav.Link as={Link} to="/classes">Klassen</Nav.Link>
            <Nav.Link as={Link} to="/teachers">Lehrer</Nav.Link>
          </Nav>

          {/* Centered Logo with Text */}
          <BSNavbar.Brand href="/" className="mx-auto d-flex align-items-center">
            <img
              src="/logo.png"  /* Your logo image path */
              height="50"
              alt="School Logo"
              className="d-inline-block align-top"
            />
            {/* Add the custom text next to the logo */}
            {/* <span className="navbar-text">SportMS St. Stefan</span> */}
          </BSNavbar.Brand>

          {/* Right-side Links */}
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/blog">News</Nav.Link>
            <Nav.Link as={Link} to="/gallery">Fotos</Nav.Link>
            <Nav.Link as={Link} to="/contact">Kontakt</Nav.Link>
            <button className="login-btn">Login</button> {/* Use custom class for the button */}
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default CustomNavbar;
