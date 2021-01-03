import React from "react";
import { GlobalContext } from "../App";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'

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
        <Col xs={2} md={4}></Col>
        <Col xs={8} md={4}>
          <div>
            {recipe.map(recipe => ( 
              <div className="recipe midform">
              <h2>{recipe.name}</h2>
              <img src={recipe.image} alt={recipe.name}></img>
  
              <h3><b>Ingredients</b></h3>
              <hr style={{border:" 1px solid #f4dbaf", margin:"0% 20% 0% 20%"}}/>
              <p className="ii">{recipe.ingredient}</p>
  
              <h3><b>Instructions</b></h3>
              <hr style={{border:" 1px solid #f4dbaf", margin:"0% 20% 0% 20%"}}/>
              <p className="ii">{recipe.instructions}</p>

              <Link to='/update'><Button className="headspace buttons" variant="dark">Edit</Button>{' '}</Link>
              <Button className="headspace buttons" variant="dark" onClick={() => handleDelete(recipe._id)}>Delete</Button>{' '}
              </div>
            ))}
            
            
          </div>
        </Col>
        <Col xs={2} md={4}></Col>
      </Row>
    </>
  );
}

return recipe.length > 0 ? loaded() : <p>mixing...</p>


};

export default Recipe;
