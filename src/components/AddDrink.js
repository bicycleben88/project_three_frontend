import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

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
     
      <form>
        <input type="text" placeholder="Drink Name" />
      </form>
      <br/>
      <Button variant="dark" onClick={() => handleAdd()}>Add Ingredient</Button>{' '}
      <br />
      {fields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            <input
              type="text"
              placeholder="Ingredient"
              value={field.value || ""}
              onChange={(e) => handleChange(idx, e)}
            />

            <Button variant="dark" id="delete" onClick={() => handleRemove(idx)}>X</Button>{' '}

          </div>
        );
      })}
<br/>
      <form>
        <textarea placeholder="Instructions" />
      </form>

      <Button variant="dark">Submit Creation</Button>{' '}
      {/* add handle submit to button */}
    </div>
  );
}


export default AddDrink;
