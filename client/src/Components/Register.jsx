import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Google } from 'react-bootstrap-icons';
// import './Login.css'; // Add custom CSS if needed

export default function RegisterPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error('Failed to register. Please check your details.');
            }

            const data = await response.json();
            setSuccess('Registration successful! Please log in.');
            setEmail('');
            setPassword('');
        } catch (error) {
            setError(error.message);
        }
    };
    
    return (
        <Container fluid className="d-flex vh-100">
            <Row className="flex-grow-1 w-100">
                {/* Left Section */}
                <Col md={6} className="d-flex align-items-center justify-content-center bg-primary text-white">
                    <div>
                        <h1 className="display-1">Welcome</h1>
                    </div>
                </Col>

                {/* Right Section */}
                <Col md={6} className="d-flex align-items-center justify-content-center bg-dark text-white">
                    <div className="w-75">
                    {error && <div className="alert alert-danger">{error}</div>}
                    {success && <div className="alert alert-success">{success}</div>}
                        
                        <div className="form-group row">
                            <div className="col">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" className="form-control" id="firstName" placeholder="Enter first name" />
                            </div>
                            <div className="col">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" className="form-control" id="lastName" placeholder="Enter last name" />
                            </div>
                        </div>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email}  onChange={(e) => setEmail(e.target.value)} required />
                            </Form.Group>

                            <Form.Group controlId="formPassword" className="mb-3">
                                <Form.Label>Password:</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </Form.Group>


                        </Form>
                            <Form.Group controlId="formConfirmPassword" className="mb-3">
                                <Form.Label>Confirm Password:</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100">
                                Login
                            </Button>
                        <div className="text-center mt-3">
                            Already have an account, <a href="#signup" className="text-info">Login</a>.
                        </div>
                        <div className="text-center mb-4 mt-4">OR</div>
                    <Button variant="warning" className="w-100 mb-3 d-flex align-items-center justify-content-center">
                            <Google className="me-2" />
                            Continue With Google
                    </Button>
                    </div>
                    
                </Col>
            </Row>
        </Container>
    );
}
