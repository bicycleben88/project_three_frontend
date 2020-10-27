import React from 'react'

function AddDrink() {
    return (
      <div className="App">
        <h2>Add a Drink in the form below</h2>

{/* onSubmit={handleSubmit} */}
        <form>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="drink"
            name="name"
            // onChange={handleChange}
            // value={state.name}
            placeholder="Drink Name"
          />
          <select Value="Alcoholic?">
            <option value= "Yes">Yes</option>
            <option value= "No"> No</option>
          </select>
          <input type="submit" value="Add Beverage" />
        </form>

      </div>
    );
  }

export default AddDrink