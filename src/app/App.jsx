import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonO from '../components/ButtonO/ButtonO'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar/NavBar'
import BackGround from '../components/BackGround/BackGround'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FooterP from '../components/FooterP/FooterP';
import Card1 from '../components/Card1/Card1'
import Card2 from '../components/Card2/Card2';
import upperB from '../components/upperB/upperB';
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className="containerw">
        <NavBar className="nav-custom" />
        <upperB/>
        <BackGround/>
        <Card1/>
        <br />
        <Card2/>
        <FooterP />
    </div>
      
     
      
      
    </>
  )
}

export default App
