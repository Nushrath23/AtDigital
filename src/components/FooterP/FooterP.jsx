import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function FooterP(){

    return(
        <>

          <Container fluid className='footB nav-custom' >
            <Row>
            <Col sm={1}></Col>
                <Col sm={2}>
                    <br />
                <img src="./src/assets/Logo.png"/>
                <br /><br />
                <p className="navp">Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
                </Col>
                
                <Col sm={4}>

                </Col>
                <Col sm={2}>
                    <br />
                    
                    <ol class="nostyle navp">
                        <li><h5>Our Technologies</h5></li>
                        <li>ReactJS</li>
                        <li>Gatsby</li>
                        <li>NextJS</li>
                        <li>NodeJS</li>
                        <li>GraphQL</li>
                        <li>Laravel</li>
                    </ol>
                </Col>
                <Col sm={2}>
                    <br />
                
                    <ol class="nostyle navp">
                    <li><h5>Our Services</h5></li>
                        <li>Social Media Marketing</li>
                        <li>Web & Mobile App Development </li>
                        <li>Data & Analytics</li>
                        <li>Google Marketing Solutions</li>
                        <li>Search Engine Optimization</li>
                    </ol>
                </Col>
            </Row>
          </Container>
      
        <div className="nav-custom text-center"><h5>Privacy Policy | Terms & Conditions</h5></div>
        
        
      </>
    )
}