import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'


function AddDrink() {
  const [fields, setFields] = useState([{ value: null }]);

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  //function handleSubmit(){}

  return (
    <div className="App">
       <h1 className="mixheading">Mix a Drink Below!</h1>
      <h2>Drink Name</h2>
      <form>
        <input type="text" placeholder="Enter drink name here" />
      </form>
    
      <h2>Add Ingredients</h2>
      <button type="button" onClick={() => handleAdd()}>
                      + Add more ingredients
                    </button>
      {fields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            <input
              type="text"
              placeholder="Enter ingredients here"
              value={field.value || ""}
              onChange={(e) => handleChange(idx, e)}
            />{" "}
            
            <button style={{backgroundColor:"#EDECEA", padding:"2px"}}type="button" onClick={() => handleRemove(idx)}>
              X
            </button>
            
            <br />

          </div>
        );
      })}
      <br />
      <h2>List of Instructions</h2>
      <form>
        <textarea placeholder="Enter instructions here" />
      </form>
      {/* <h2>Mix a Drink Below!</h2>
      
      <InputGroup className="txtarea" >
        <Form.Control
          type="text"
          placeholder="Drink Name" >
        </Form.Control>
      </InputGroup>

      <Button className="headspace" variant="dark" onClick={() => handleAdd()}>Add Ingredient</Button>{' '}
      <br />
      {fields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            <InputGroup className="txtarea headspace" >
              <Form.Control
                type="text"
                placeholder="Ingredient"
                value={field.value || ""}
                onChange={(e) => handleChange(idx, e)}>
              </Form.Control>

              <InputGroup.Append>
                <Button variant="dark" id="delete" onClick={() => handleRemove(idx)}>X</Button>{' '}
              </InputGroup.Append>
            </InputGroup>
          </div>
        );
      })}

      <Form.Control className="txtarea headspace" placeholder="Instructions" as="textarea" rows={3} />
      
      <Button className="headspace" variant="dark">Submit Creation</Button>{' '}
      {/* add handle submit to button */} 
    </div>
  );
}

export default AddDrink;
