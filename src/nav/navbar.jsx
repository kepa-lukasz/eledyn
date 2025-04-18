import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './navbar.css'; // styl glassmorphism w osobnym pliku

const GlassNavbar = () => {
  return (
    <Navbar data-bs-theme="dark" expand="lg" className="glass-navbar fixed-top">
      <Container>
        <Navbar.Brand href="#" className="text-white d-flex align-items-center">
            <img src='images/logo.png'/>
            
            <h2 className='fs-4 pt-2'>&nbsp;Eledyn</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link href="#about" className="text-white">Strona główna</Nav.Link>
            <Nav.Link href="#about" className="text-white">O nas</Nav.Link>
            <Nav.Link href="#home" className="text-white">Aktualności</Nav.Link>
            <Nav.Link href="#home" className="text-white">Projekty</Nav.Link>
            <Nav.Link href="#services" className="text-white">Historia</Nav.Link>
            <Nav.Link href="#contact" className="text-white">Kontakt</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default GlassNavbar;
