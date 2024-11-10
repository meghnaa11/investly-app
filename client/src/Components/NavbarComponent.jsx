import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

export default function NavbarComponent() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#ffffff' }} className="py-3 shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="fs-3 fw-bold" style={{ color: '#1c1f71' }}>Investly</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="px-3" style={{ color: '#1c1f71' }}>Home</Nav.Link>
            <Nav.Link href="#discover" className="px-3" style={{ color: '#1c1f71' }}>Discover</Nav.Link>
            <Nav.Link href="#invest" className="px-3" style={{ color: '#1c1f71' }}>Invest</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <Button variant="outline-primary" className="me-2" style={{ color: '#1c1f71', borderColor: '#1c1f71' }}>Log in</Button>
            <Button style={{ backgroundColor: '#2d8cf0', border: 'none' }} className="fw-bold text-white">Get started</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
