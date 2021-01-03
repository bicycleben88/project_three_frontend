import React from "react"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {GlobalContext} from '../App';

function Navigation(){
      //Deconstruct globalState and setGlobalState and pass into useContext
      const {globalState, setGlobalState} = React.useContext(GlobalContext);

     //log out button with click event
     const logOut = (
        <Nav.Link onClick={() => {
            //remove token saved in local storage
            window.localStorage.removeItem("token");
            //setGlobalState token to null;
            setGlobalState({...globalState, token: null})
        }}>Log Out</Nav.Link>
    )

    return(
        <Navbar collapseOnSelect expand="lg" id="stucktop" bg="dark" variant="dark">
            <Navbar.Brand className="brand" href="/">Cocktail Hour</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link className="navlink" href="/screwit">Screw It!</Nav.Link>
            <Nav.Link className="navlink" href="/signup">SignUp</Nav.Link>
            <Nav.Link className="navlink" href="/login">LogIn</Nav.Link>
            {/* if there's token in local storage then render log out button */}
            {globalState.token ? logOut : null}
            <Nav.Link className="navlink" href="/recipe">Recipes</Nav.Link>
            
            <Nav.Link className="navlink" href="/about">About</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
  export default Navigation