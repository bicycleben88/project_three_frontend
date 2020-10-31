import React from "react";
import { GlobalContext } from "../App";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Recipe = (props) => {
  //Deconstruct globalState and setGlobalState and pass into useContext
  const { globalState, setGlobalState } = React.useContext(GlobalContext);
  const { url } = globalState;

  return (
    <>
      <Jumbotron>
        <Container>
          <h1>Recipes</h1>
        </Container>
      </Jumbotron>

      <Row>
        <Col></Col>
        <Col>
          <div className="recipe midform">
            <p>Make the recipes appear here plz</p>

            <h1>{url.name}</h1>
            <img src={url.image} alt={url.name}></img>

            <h3><b>Ingreients</b></h3>
            <h4>{url.ingredient}</h4>
            <p className="ii">Font Size Test</p>

            <h3><b>Instructions</b></h3>
            <h4>{url.instructions}</h4>
            <p className="ii">Font Size Test stir dont shake, add ice enjoy! </p>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
};

export default Recipe;
