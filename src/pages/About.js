import React from 'react';
import {GlobalContext} from '../App';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../Signup.css';

const Login = (props) => {
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

    //When user clicks Log in
    const handleSubmit = (event) => {
        //stop page from reloading
        event.preventDefault();
        //deconstruct username and password from state
        const {username, password} = form
        //make API call
        fetch(`${url}/auth/login`, {
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
            console.log(data)
            //store token from logged-in user in local storage
            window.localStorage.setItem("token", JSON.stringify(data));
            //add token from logged-in user to globalState
            setGlobalState({...globalState, token: data.token});
            //reset the form
            setForm(blank)
            //send user to home page
            props.history.push('/');
        });
    }

    return (
        <>
        <Jumbotron>
            <Container>
                <h1>About</h1>
            </Container>
        </Jumbotron>
        <Row>
          <Col></Col>
          <Col className="central about">
            <p>Welcome to Cocktail Hour! Your go to destination if you're parched and looking to party. <br/> 
            <a href="/signup">signup</a>/<a href="/login">login</a> to create your own drink and save it for later, or feel free to <a href="/screwit">"Screw It!"</a> to generate a random drink.<br/>
            Developed in November 2020 by 
            <a href="https://portfolio-alpha-orpin.vercel.app/" target="_blank"> Carlo Berardelli</a>, 
            <a href="https://github.com/bicycleben88" target="_blank"> Ben Higginbotham</a>,  
            <a href="https://annamcheng.netlify.app/" target="_blank"> Anna Cheng</a>, and
            <a href="https://github.com/ijvitaga" target="_blank"> Ian Vitaga</a>  </p>
        </Col>
          <Col></Col>
          </Row>
        </>
    )
};

export default Login;
