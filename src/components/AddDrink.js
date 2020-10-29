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

      <button type="button">Submit Creation</button>
      {/* add handle submit to button */}
    </div>
  );
}

//   Inspired by: https://codesandbox.io/s/q555kp8jj?fontsize=14&file=/src/index.js:119-1141

export default AddDrink;
