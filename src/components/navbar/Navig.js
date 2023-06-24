import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {MdGroups3} from "react-icons/md"
import { Navbar } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import "./Navbar.css"
function Navig() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className='nav '>
        <Container>
          <Navbar.Brand href="/"><MdGroups3 style={{marginBottom:"3px",fontSize:"30px"}}/>  C R U D</Navbar.Brand>
          <Nav className=" ab" >
          <Nav.Link    href="/login" style={{marginLeft:"45px"}} >Login</Nav.Link>
            <Nav.Link  href="/add-users" style={{marginLeft:"45px"}} >AddUsers</Nav.Link>
            <Nav.Link  href="/users" style={{marginLeft:"45px"}}>Users</Nav.Link>
            
          
         
            
          <Button style={{marginLeft:"50px"}} variant="outline-light " href="/">Get Started</Button>
          
         
          </Nav>
        </Container>
      </Navbar>
 
    </>
  );
}


export default Navig;
