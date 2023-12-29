import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import ButtonO from '../ButtonO/ButtonO';


export default function Card1(props) {
  return (
    <Card className="custom-card">
      <Row>
        <Col md={6} className="card-image">
          <Card.Img src="../src/assets/image 2.png" alt="Image" />
        </Col>
        <Col md={6}>
          <Card.Body className='card-body '>
            <br /><br /><br />
            <Card.Title className='purp'>Web & Mobile App Development</Card.Title>
            <Card.Text>
            Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
            </Card.Text>
            <ButtonO name={'LEARN MORE'}/>
          </Card.Body>
        </Col>
      </Row>
    </Card>
    
  
    
  );
}