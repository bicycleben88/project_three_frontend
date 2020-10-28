import React from "react"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

function Navigation(){
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Cocktail Hour</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cocktails</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            </Nav>
        </Navbar>
    )
}
  export default Navigation