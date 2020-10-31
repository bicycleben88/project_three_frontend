import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//create empty user object
const initDrink = {
  drinkName: "",
  ingredients: [],
  instructions: "",
};

const AddDrink = () => {
  const [drink, setDrink] = useState(initDrink);

  const handleChange = (i, event) => {
    setDrink({...drink, [event.target.name]: event.target.value});
  };

  const handleAdd = (event) => {
    // values.push({ value: null }); 
    setDrink({...drink, "ingredient": event.target.value});
  };

  const handleRemove = (i, event) => {
    // values.splice(i, 1);
    setDrink({...drink, [event.target.name]: event.target.value});
  };

  //When user clicks Log in
  const handleSubmit = (event) => {
    //stop page from reloading
    event.preventDefault();
    //deconstruct username and password from state
    // console.log(fields);
    // const { drinkName, ingredient, instructions } = fields;
    // //make API call
    // fetch(`${url}/auth/login`, {
    //   //enter method details
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({  }),
    // })
    //   //convert response to json
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     //store token from logged-in user in local storage
    //     window.localStorage.setItem("token", JSON.stringify(data));
    //     //add token from logged-in user to globalState
    //     setGlobalState({ ...globalState, token: data.token });
    //     //reset the form
    //     setForm(blank);
    //     //send user to home page
    //     props.history.push("/");
    // });
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
              value={initDrink.drinkName}
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
                    value={ingredient.value || ""}
                    onChange={(e) => handleChange(idx, e)}
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
            value={initDrink.instructions}
            as="textarea"
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
