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

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <form>
        <input type="text" placeholder="Drink Name" />
      </form>

      <button type="button" onClick={() => handleAdd()}>
        Add Ingredient
      </button>

      {fields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            <input
              type="text"
              placeholder="Ingredient"
              value={field.value || ""}
              onChange={(e) => handleChange(idx, e)}
            />
            <button type="button" onClick={() => handleRemove(idx)}>
              X
            </button>
          </div>
        );
      })}

      <form>
        <textarea placeholder="Instructions" />
      </form>

      <button type="button">Submit Creation</button>
      
    </div>
  );
}

//   Inspired by: https://codesandbox.io/s/q555kp8jj?fontsize=14&file=/src/index.js:119-1141

export default AddDrink;
