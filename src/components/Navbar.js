import React from "react"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom';

function Navigation(){
    return(
        <Navbar id="stucktop" bg="dark" variant="dark">
            <Navbar.Brand href="/">Cocktail Hour</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="https://stoic-jepsen-f0ca22.netlify.app/signup">SignUp</Nav.Link>
            <Nav.Link href="/features">Cocktails</Nav.Link>
            <Nav.Link href="/pricing">About</Nav.Link>
            </Nav>
        </Navbar>
    )
}
  export default Navigation