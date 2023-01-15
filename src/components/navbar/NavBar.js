import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from "react-bootstrap";
import CartWidget from "../cartWidget/CartWidget";



export const NavBar = () => {
    return (
         <h1>
         <Navbar bg="dark" variant="dark">
        <Container> 
          <Navbar.Brand href="#home"><img src={"https://res.cloudinary.com/dvvf8gdci/image/upload/v1673462129/logo_small_itw4ps.png"} alt="logo" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing"><CartWidget/></Nav.Link>
          </Nav>
        </Container> 
      </Navbar>    
   </h1>
    );
}
export default NavBar;