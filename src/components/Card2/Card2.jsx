import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import ButtonO from '../ButtonO/ButtonO';


export default function Card2(props) {
  return (
    <Card className="custom-card">
      <Row>
        <Col md={6}>
          <Card.Body className='card-body '>
            <br /><br /><br />
            <Card.Title className='purp'>Digital Strategy Consulting</Card.Title>
            <Card.Text>
            Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
            </Card.Text>
            <ButtonO name={'LEARN MORE'}/>
          </Card.Body>
        </Col>
        <Col md={6} className="card-image">
          <Card.Img src="../src/assets/image 1.png" alt="Image" />
        </Col>
      </Row>
    </Card>
    
  
    
  );
}