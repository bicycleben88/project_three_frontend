import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

const Signup = (props) => {
    return(
        <>
        <Jumbotron>
            <Container>
                <h1>Sign Up</h1>
            </Container>
        </Jumbotron>
        <InputGroup className="txtarea" >
            <Form.Control
            type="text"
            placeholder="Create Username" 
            style={{width: '155px'}}>
            </Form.Control>
            <Form.Control
            type="password"
            placeholder="Create Password" 
            style={{width: '155px'}}>
            </Form.Control>
            <Form.Control
            type="submit"
            value="Sign Up" 
            style={{width: '55px'}}>
            </Form.Control>
        </InputGroup>
        </>
    )
}

export default Signup;