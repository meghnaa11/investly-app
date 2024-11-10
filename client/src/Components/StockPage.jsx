import React from 'react';
import { useParams } from 'react-router-dom';
import financeData from '../data/finance.json';
import cryptoData from '../data/crypto.json';
import agricultureData from '../data/agriculture.json';
import techData from '../data/tech.json';
import healthcareData from '../data/healthcare.json';
import top10Data from '../data/topten.json';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

// Map the category IDs to the corresponding data files
const categoryDataMap = {
    finance: financeData,
    crypto: cryptoData,
    agriculture: agricultureData,
    technology: techData,
    healthcare: healthcareData,
    'top 10': top10Data
};

export default function StockPage() {
    const { id } = useParams();
    const stockData = categoryDataMap[id.toLowerCase()];

    if (!stockData) {
        return <div className="text-center mt-5 text-danger">Category not found</div>;
    }

    return (
        <div style={{ background: 'linear-gradient(135deg, #1c1f71, #2d8cf0)', minHeight: '100vh', paddingBottom: '2rem' }}>
            <Container className="pt-5">
                <h2 className="text-center mb-4 text-white">Investment Details for {id.charAt(0).toUpperCase() + id.slice(1)}</h2>
                <div className="d-flex flex-wrap justify-content-center">
                    {stockData.map((stock, index) => (
                        <Card
                            key={index}
                            className="m-3 shadow-lg"
                            style={{
                                width: '20rem',
                                borderRadius: '20px',
                                backgroundColor: '#2d4df0',
                                color: 'white',
                                border: 'none'
                            }}
                        >
                            <Card.Body>
                                <Card.Title className="fw-bold">{stock.company_name}</Card.Title>
                                <Card.Subtitle className="mb-3 text-light">Ticker: {stock.ticker}</Card.Subtitle>
                                <ListGroup variant="flush" className="bg-transparent">
                                    <ListGroup.Item className="bg-transparent text-white border-0">
                                        <strong>Rank:</strong> {stock.rank}
                                    </ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent text-white border-0">
                                        <strong>Market Cap:</strong> {stock.market_cap_usd}
                                    </ListGroup.Item>
                                </ListGroup>
                                <Button
                                    variant="outline-light"
                                    className="mt-3 w-100 fw-bold"
                                    style={{ borderRadius: '15px' }}
                                >
                                    Explore More
                                </Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Container>
        </div>
    );
}
