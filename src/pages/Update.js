import React from "react";
import { GlobalContext } from "../App";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UpdateDrink from '../components/UpdateDrink.js';


const Recipe = (props) => {
  //Deconstruct globalState and setGlobalState and pass into useContext
  const { globalState, setGlobalState } = React.useContext(GlobalContext);
  const { url, token } = globalState;

  const [recipe, setRecipe] = React.useState({})
  React.useEffect(() => {
    getRecipes()
  }, [])
  
  //fetch
  const getRecipes = () => {fetch(`${url}/recipe`)
    //convert response to json
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setRecipe(data)
    })}

  const handleDelete = (id) => {
    fetch(`${url}/recipe/${id}`, {
      method: 'delete',
      headers:{
        authorization: `bearer ${token}`
      }
    }).then(() => {
      getRecipes()
    });
  };

  const loaded = () => {

  return (
    <>
      <Jumbotron>
        <Container>
          <h1>Recipes</h1>
        </Container>
      </Jumbotron>

      <Row>
        <Col></Col>
        <Col className="central">
          <UpdateDrink/>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}

return recipe.length > 0 ? loaded() : <p>mixing...</p>


};

export default Recipe;
