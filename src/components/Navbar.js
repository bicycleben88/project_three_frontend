import React from "react"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom';

function Navigation(){
    return(
        <Navbar id="stucktop" bg="dark" variant="dark">
            <Navbar.Brand className="brand" href="/">Cocktail Hour</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link className="navlink" href="/signup">SignUp</Nav.Link>
            <Nav.Link className="navlink" href="/features">Cocktails</Nav.Link>
            <Nav.Link className="navlink" href="/pricing">About</Nav.Link>
            </Nav>
        </Navbar>
    )
}
  export default Navigation