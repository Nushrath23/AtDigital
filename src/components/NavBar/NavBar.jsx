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
        <div className="navb justify-content-end"  >
        <ol>
          <li>Services</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Careers</li>
        </ol>
        
       
      </div>
      </Col>
      </Row>
      </Container>
 

        

    )
}