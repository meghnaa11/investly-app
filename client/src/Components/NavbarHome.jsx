import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

export default function NavbarHome() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#ffffff' }} className="py-3">
      <Container>
        <Navbar.Brand href="#home" className="fs-3 fw-bold" style={{ color: '#1c1f71' }}>Investly</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ color: '#1c1f71' }} className="px-3">Home</Nav.Link>
            <Nav.Link href="#discover" style={{ color: '#1c1f71' }} className="px-3">Discover</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <Button variant="outline-primary" className="me-2" style={{ color: '#1c1f71', borderColor: '#1c1f71' }}>Log In</Button>
            <Button style={{ backgroundColor: '#2d8cf0', border: 'none' }} className="fw-bold text-white">Get Started</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
