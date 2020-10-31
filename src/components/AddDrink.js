import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {GlobalContext} from '../App';
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const AddDrink = () => {
  const {globalState, setGlobalState} = React.useContext(GlobalContext);
  const {url, token, username } = globalState;

  //create empty user object
  const initDrink = {
    drinkName: "",
    ingredients: [],
    instructions: "",
  };
  
  const [drink, setDrink] = useState(initDrink);

  const handleChange = (event) => {
    // Checks of the name attributes of the field contains a number. ex: (ingredient0,ingredient1, ingresient2)
    const ingredientIndex = event.target.name.match(/\d+/g)

    if (ingredientIndex == 0 || ingredientIndex) {
      drink.ingredients[ingredientIndex] = event.target.value
      setDrink({...drink, ingredients: drink.ingredients });
    } else {
      setDrink({...drink, [event.target.name]: event.target.value});
    }
  };

  const handleAdd = () => {
    // Push an empty string to the ingredients hash
    drink.ingredients.push('')
    setDrink({...drink, ingredients: drink.ingredients });
  };

  const handleRemove = (i, event) => {
    // values.splice(i, 1);
    setDrink({...drink, [event.target.name]: event.target.value });
  };

  //When user clicks Log in
  const handleSubmit = (event) => {
    console.log(token)
    //stop page from reloading
    event.preventDefault();
    //deconstruct username and password from state
    console.log(drink);
    const { drinkName, ingredients, instructions } = drink;
    // //make API call
    fetch(`${url}/recipe`, {
      //enter method details
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `bearer ${token}`
      },
      body: JSON.stringify({ drinkName, ingredients, instructions, username}),
    }).then((response) => response.json())
      .then((data) => {
        console.log("response:", data);
    //     //store token from logged-in user in local storage
    //     window.localStorage.setItem("token", JSON.stringify(data));
    //     //add token from logged-in user to globalState
    //     setGlobalState({ ...globalState, token: data.token });
    //     //reset the form
    //     setForm(blank);
    //     //send user to home page
    //     props.history.push("/");
    });
  };

  return (
    <div>
      <div className="midform">
        <h2 style={{ color: "#f4dbaf" }}>Mix Your Own</h2>

        <Form onSubmit={handleSubmit}>
          <InputGroup className="txtarea">
            <Form.Control
              type="text"
              name="drinkName"
              placeholder="Drink Name"
              value={drink.drinkName}
              onChange={handleChange}
            ></Form.Control>
          </InputGroup>
          <Button
            className="headspace buttons"
            variant="dark"
            onClick={() => handleAdd()}
          >
            Add Ingredient
          </Button>{" "}
          <br />
          {drink.ingredients.map((ingredient, idx) => {
            return (
              <div key={`${ingredient}-${idx}`}>
                <InputGroup className="txtarea headspace">
                  <Form.Control
                    type="text"
                    name={`ingredient${idx}`}
                    placeholder="Ingredient"
                    value={drink.ingredients[idx] || ""}
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
            value={drink.instructions}
            as="textarea"
            onChange={handleChange}
            rows={3}
          />
          <Button type="submit" className="headspace buttons" variant="dark">
            Submit Creation
          </Button>{" "}
        </Form>
      </div>
    </div>
  );
};

export default AddDrink;
