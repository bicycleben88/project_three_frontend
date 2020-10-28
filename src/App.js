import React from 'react';
import './App.css';
import AddDrink from './components/AddDrink'
import Intro from './components/Intro'

function App() {
  return (
    <div className="App">
      <h1>Bartender App 2</h1>
      <Intro/>
      <AddDrink/>
    </div>
  );
}

export default App;
