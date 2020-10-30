import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

function Intro() {

return(
    <Jumbotron>
        <Container>
        <h1>Cocktail Hour</h1>
        <h5 className="introtext"> 
            Your go to destination if you're parched and looking to party. <br/> 
            <a href="#"> Search for a drink</a> below, or <a href="/signup">signup/login</a> to create your own drink and save it for later.<br/>
            Additionally, you can <a href="/screwit">"Screw It!"</a> to populate a random drink.
        </h5>
        </Container>
    </Jumbotron>
    )
}

export default Intro