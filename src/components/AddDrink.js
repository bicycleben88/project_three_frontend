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
      <h2>Mix a Drink Below!</h2>
      
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
