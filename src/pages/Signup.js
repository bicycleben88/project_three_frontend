import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {GlobalContext} from '../App';
import '../Signup.css';


const Signup = (props) => {
     //Deconstruct globalState and setGlobalState and pass into useContext
     const {globalState, setGlobalState} = React.useContext(GlobalContext);
     const {url} = globalState;

    //create empty user object
    const blank = {
        username: '',
        password: ''
    };

    //Define state and setState for form 
    const [form, setForm] = React.useState(blank);

     //Allow user to type into text field
     const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    //When user clicks Sign Up
    const handleSubmit = (event) => {
        //stop page from reloading
        event.preventDefault();
         //deconstruct username and password from state
        const {username, password} = form
        //make API call
        fetch(`${url}/auth/signup`, {
            //enter method details
            method: "post",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password})
            })
        //convert response to json
        .then(response => response.json())
        .then(data => {
            console.log(data);
            //add token from logged-in user to globalState
            setGlobalState({...globalState, token: data.token})
            //reset the form
            setForm(blank);
            //send user to log in page
            props.history.push('/login');
        });
    }

    return(
        <>
        <Jumbotron>
            <Container>
                <h1>Sign Up</h1>
            </Container>
        </Jumbotron>

        <Row>
          <Col></Col>
          <Col>
        <InputGroup className="txtarea midform">
            <Form className = "moveit" onSubmit={handleSubmit}>
                <Form.Control
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    placeholder="Create Username" 
                    style={{width: '155px'}}>
                </Form.Control>
                <Form.Control
                    className= "headspace"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Create Password" 
                    style={{width: '155px'}}>
                </Form.Control>
                <input 
                    type="submit"
                    value="Sign Up"
                    className="headspace buttons" 
                    variant="dark"
                    style={{border:"none", borderRadius:"2px"}}
                />
            </Form>
        </InputGroup>
        </Col>
          <Col></Col>
          </Row>
        </>
    )
}

export default Signup;