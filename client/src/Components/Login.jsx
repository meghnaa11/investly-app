import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Google } from 'react-bootstrap-icons';

// import './Login.css'; // Add custom CSS if needed

export default function LoginPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    return (
        <Container fluid className="d-flex vh-100">
            <Row className="flex-grow-1 w-100">
                {/* Left Section */}
                <Col md={6} className="d-flex align-items-center justify-content-center bg-primary text-white">
                    <div>
                        <h1 className="display-1">Welcome</h1>
                        <h1 className="display-1">Back</h1>
                    </div>
                </Col>

                {/* Right Section */}
                <Col md={6} className="d-flex align-items-center justify-content-center bg-dark text-white">
                    <div className="w-75">
                    <Button variant="outline-light" className="w-100 mb-3 d-flex align-items-center justify-content-center">
                            <Google className="me-2" />
                            Google
                        </Button>
                        <div className="text-center mb-3">or</div>
                        <Form>
                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formPassword" className="mb-3">
                                <Form.Label>Password:</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100">
                                Login
                            </Button>
                        </Form>
                        <div className="text-center mt-3">
                            Don’t have an account, <a href="#signup" className="text-info">sign up</a>.
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}