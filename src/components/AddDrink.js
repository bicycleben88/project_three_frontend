import React, { useState } from "react";

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
      <button type="button" onClick={() => handleAdd()}>
        Add Ingredient
      </button>
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
            
            <button id="delete" type="button" onClick={() => handleRemove(idx)}>
              X
            </button>
          </div>
        );
      })}
<br/>
      <form>
        <textarea placeholder="Instructions" />
      </form>

      <button type="button">Submit Creation</button>
      {/* add handle submit to button */}
    </div>
  );
}


export default AddDrink;
