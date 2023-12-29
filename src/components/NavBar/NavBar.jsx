import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function NavBar(){
    return(
      <Container fluid className='nav-custom'>
        <Row>
        <Col sm={1}> </Col>
        <Col sm={4} className='justify-content-start'>
        <img src='../src/assets/Logo.png'/>
        </Col>
        <Col>
        <Nav className="navb justify-content-end"  >
        <Nav.Item>
          <Nav.Link href="/">Services</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/">About us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/">Contact us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/">Careers</Nav.Link>
        </Nav.Item>
      </Nav> 
      </Col>
      </Row>
      </Container>
 

        

    )
}