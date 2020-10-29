import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

function Intro() {

return(
    <Jumbotron>
        <Container>
        <h1>Welcome to Cocktail Hour!</h1>
        <h5> 
            Your go to destination if you're parched and looking to party. <br/> 
            Feel free to <a href="#"> search for a drink</a> below, or hit <a href="#">"Screw It!"</a> to have a random drink populate for you. <br/>
            Additionally, you can <a href="#">signup/login</a> to create your own drink and save it for future reference.
        </h5>
        </Container>
    </Jumbotron>
    )
}

export default Intro