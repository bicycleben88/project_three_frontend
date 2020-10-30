import React from 'react';
import './App.css';
import AddDrink from './components/AddDrink'
import Intro from './components/Intro'
import RandomDrink from './components/Testrandom'
// import TestApp from './Testapp'
// import Testindex from './Testindex'

function App() {
  return (
    <div className="App">
      <h1>Bartender App</h1>
      <Intro/>
      <AddDrink/>
      <RandomDrink/>
      {/* <TestApp/>
      <Testindex/> */}
    </div>
  );
}

export default App;
