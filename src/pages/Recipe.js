import React from "react";
import { GlobalContext } from "../App";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

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

  const handleChange = (event) => {
    const ingredientIndex = event.target.name.match(/\d+/g)
 

    if (ingredientIndex == 0 || ingredientIndex) {
      recipe.ingredients[ingredientIndex] = event.target.value
      setRecipe({...recipe, ingredients: recipe.ingredients });
    } else {
      setRecipe({...recipe, [event.target.name]: event.target.value});
    }
  };

  const handleAdd = (event) => {
    recipe.ingredients.push('')
    setRecipe({...recipe, ingredients: recipe.ingredients });
  };

  const handleRemove = (i, event) => {
    recipe.ingredients.pop();
    setRecipe({...recipe, ingredients: recipe.ingredients });
  };

  //When user clicks Log in
  const handleSubmit = (event) => {
    //stop page from reloading
    event.preventDefault();
    const { drinkName, ingredient, instructions } = recipe;
    //make API call
    fetch(`${url}/recipe`, {
      //enter method details
      method: "post",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${token}`
      },
      body: JSON.stringify({ recipe }),
    })
      //convert response to json
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        //reset the form
        // setDrink(initDrink);
        //send user to home page
        props.history.push("/recipe");
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

              <Button className="headspace buttons" variant="dark" onClick={() => handleDelete(recipe._id)}>Delete</Button>{' '}
              <Form onSubmit={handleSubmit} id="add-form">
          <InputGroup className="txtarea">
            <Form.Control
              type="text"
              name="drinkName"
              placeholder="Drink Name"
              value={recipe.drinkName}
              onChange={handleChange}
            ></Form.Control>
          </InputGroup>
          <Button
            className="headspace buttons"
            variant="dark"
            onClick={(e) => handleAdd(e)}
          >
            Add Ingredient
          </Button>{" "}
          <br />
          {recipe.ingredients.map((ingredient, idx) => {
            return (
              <div key={`${ingredient}-${idx}`}>
                <InputGroup className="txtarea headspace">
                  <Form.Control
                    type="text"
                    name={`ingredient${idx}`}
                    placeholder="Ingredient"
                    value={recipe.ingredients[idx] || ""}
                    onChange={(e) => handleChange(e)}
                  ></Form.Control>
                  <InputGroup.Append>
                    <Button
                      variant="dark"
                      className="buttons"
                      id="delete"
                      onClick={() => handleRemove(idx)}
                    >
                      X
                    </Button>{" "}
                  </InputGroup.Append>
                </InputGroup>
              </div>
            );
          })}
          <Form.Control
            className="txtarea headspace"
            name="instructions"
            placeholder="Instructions"
            value={recipe.instructions}
            as="textarea"
            onChange={handleChange}
            rows={3}
          />
          <Button type="submit" className="headspace buttons" variant="dark">
            Submit Creation
          </Button>{" "}
        </Form>
              <hr style={{border:" 1px solid #f4dbaf"}}/>
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
