import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
// import Input from 'react-bootstrap/Input'
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
      <h2>Mix a Drink Below!</h2>
     
      <InputGroup id="txtarea" >
              <Form.Control
                type="text"
                placeholder="Drink Name" >
              </Form.Control>
            </InputGroup>

      <br/>
      <Button variant="dark" onClick={() => handleAdd()}>Add Ingredient</Button>{' '}
      <br />
      {fields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            <InputGroup id="txtarea" >
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
<br/>

      <Form.Control id="txtarea" placeholder="Instructions" as="textarea" rows={3} />

      <Button variant="dark">Submit Creation</Button>{' '}
      {/* add handle submit to button */}

    </div>
  );
}


export default AddDrink;
