import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import NavbarHome from './NavbarHome';

export default function Home() {
  return (
    <>
   <NavbarHome/>
    <div className="d-flex align-items-center justify-content-center vh-100" style={{ background: 'linear-gradient(135deg, #1c1f71, #2d8cf0)' }}>
      <Container className="text-center text-white">
        <h1 className="display-2 mb-4">Investly helps you invest smarter, not harder</h1>
        <Button variant="primary" className="mt-4 px-5 py-3">get started</Button>
      </Container>
    </div>
    </>
  );
}
