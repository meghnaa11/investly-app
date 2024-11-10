import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Investly</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Discover</Nav.Link>
                <Nav.Link href="#link">Invest</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  )
}
