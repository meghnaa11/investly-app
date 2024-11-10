// Discover.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function Discover() {
    const investmentCategories = [
        { title: 'Finance', imgSrc: '/images/finance.jpg', description: 'Explore top financial firms and strategies.' },
        { title: 'HealthCare', imgSrc: '/images/healthcare.jpg', description: 'CVS Health, the Cigna, Baxter...' },
        { title: 'Agriculture', imgSrc: '/images/agriculture.jpg', description: 'Bank of America, Capital One...' },
        { title: 'Technology', imgSrc: '/images/technology.jpg', description: 'Leading tech investments and firms.' },
        { title: 'Crypto', imgSrc: '/images/crypto.jpg', description: 'Discover the world of digital currencies.' },
        { title: 'Top 10', imgSrc: '/images/top10.jpg', description: 'Explore emerging investment options.' },
    ];

    return (
        <div className="d-flex flex-column align-items-center" style={{ background: 'linear-gradient(135deg, #1c1f71, #2d8cf0)', minHeight: '100vh' }}>
            <Container className="pt-5 pb-4">
                <h2 className="text-white mb-4">Discover Investment Categories</h2>
                <Row>
                    {investmentCategories.map((category, index) => (
                        <Col key={index} md={4} sm={6} className="mb-4">
                            <Card className="text-white border-0 shadow-sm" style={{ backgroundColor: '#3051d3', borderRadius: '15px' }}>
                                <Card.Img
                                    variant="top"
                                    src={category.imgSrc}
                                    alt={category.title}
                                    style={{ borderRadius: '15px 15px 0 0', height: '200px', objectFit: 'cover' }}
                                />
                                <Card.Body>
                                    <Card.Title className="fw-bold">{category.title}</Card.Title>
                                    <Card.Text>{category.description}</Card.Text>
                                    <Link to={`/discover/${category.title.toLowerCase()}`}>
                                        <Card.Link href="#" className="text-white fw-semibold" style={{ textDecoration: 'underline' }}>
                                            View Details
                                        </Card.Link>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
