import React from "react"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {GlobalContext} from '../App';

import { Link } from 'react-router-dom';

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
        <Navbar id="stucktop" bg="dark" variant="dark">
            <Navbar.Brand className="brand" href="/">Cocktail Hour</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link className="navlink" href="/signup">SignUp</Nav.Link>
            {/* if there's token in local storage then render log out button */}
            {globalState.token ? logOut : null}
            <Nav.Link className="navlink" href="/features">Cocktails</Nav.Link>
            <Nav.Link className="navlink" href="/pricing">About</Nav.Link>
            </Nav>
        </Navbar>
    )
}
  export default Navigation