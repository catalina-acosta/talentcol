import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Header.css';
import logo from '../assets/talentcol-logo-sml.png';

function Header() {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false); // Close the navbar when a link is clicked
  };

  return (
    <Navbar data-bs-theme="dark" expand="lg" style={{ backgroundColor: "var(--background-color)" }} fixed='top' expanded={expanded}>
      <Container className='navbar'>
        <Navbar.Brand href="#home">
          <img src={logo} alt='Talentcol Logo' style={{ maxWidth: "12rem" }} className='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto">
            <Nav.Link href="#home" onClick={handleNavClick}>Inicio</Nav.Link>
            <Nav.Link href="#services" onClick={handleNavClick}>Servicios</Nav.Link>
            <Nav.Link href="#contact" onClick={handleNavClick}>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
