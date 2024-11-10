import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function InvestmentPage() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100" style={{ background: 'linear-gradient(135deg, #1c1f71, #2d8cf0)' }}>
      <Container className="text-center text-white p-4" style={{ maxWidth: '600px' }}>
        <h2 className="mb-4 fw-bold">Customize Your Investment</h2>
        <p className="mb-4">Plan your monthly investments and choose your risk preference to align with your financial goals.</p>
        
        <Form>
          <Form.Group controlId="formAmount" className="mb-4">
            <Form.Label className="fw-semibold">Monthly Contribution</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter amount (e.g., $500)" 
              className="text-center rounded-pill border-light"
              style={{ backgroundColor: 'transparent', color: 'white' }}
            />
          </Form.Group>

          <h5 className="mb-3 fw-semibold">Select Your Risk Level</h5>
          <div className="d-flex justify-content-center mb-4">
            <div className="d-flex align-items-center">
              <div className="bg-success rounded-circle me-2" style={{ width: '15px', height: '15px' }}></div>
              <span className="me-3">Safe</span>
              <div className="bg-warning rounded-circle me-2" style={{ width: '15px', height: '15px' }}></div>
              <span className="me-3">Moderate</span>
              <div className="bg-danger rounded-circle me-2" style={{ width: '15px', height: '15px' }}></div>
              <span>High Risk</span>
            </div>
          </div>

          <h5 className="mb-3 fw-semibold">Investment Type</h5>
          <Row className="mb-4">
            <Col>
              <Button variant="outline-light" className="w-100 rounded-pill">Deposit</Button>
            </Col>
            <Col>
              <Button variant="outline-light" className="w-100 rounded-pill">Equity</Button>
            </Col>
            <Col>
              <Button variant="outline-light" className="w-100 rounded-pill">Crypto</Button>
            </Col>
          </Row>

          <Button variant="primary" className="px-5 py-2 rounded-pill fw-bold">Invest Now</Button>
        </Form>
      </Container>
    </div>
  );
}
