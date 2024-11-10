import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

export default function NavbarHome() {
  return (
    <Navbar expand="lg" bg="white" className="py-3">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="fs-3 fw-bold text-primary" style={{ color: '#1c1f71' }}>
            Investly
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link className="px-3 text-primary">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/discover">
              <Nav.Link className="px-3 text-primary">Discover</Nav.Link>
            </LinkContainer>
          </Nav>
          <div className="d-flex align-items-center">
            <Button variant="outline-primary" className="me-2 fw-bold" style={{ borderColor: '#1c1f71', color: '#1c1f71' }}>
              Log In
            </Button>
            <Button className="fw-bold text-white" style={{ backgroundColor: '#2d8cf0', border: 'none' }}>
              Get Started
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
