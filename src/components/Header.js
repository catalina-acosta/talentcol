import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Header.css'
import logo from '../assets/talentcol-logo-sml.png'

function Header() {
  return (
    <Navbar data-bs-theme="dark" expand="lg" style={{backgroundColor:"var(--background-color)"}} fixed='top'>
    <Container className='navbar'>
      <Navbar.Brand href="#home">
        <img src={logo} alt='Talentcol Logo' style={{maxWidth:"12rem"}} className='logo'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="ms-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#services">Servicios</Nav.Link>
          <Nav.Link href="#contact">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
