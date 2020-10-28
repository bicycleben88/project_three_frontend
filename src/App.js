import React from 'react';
import './App.css';
import AddDrink from './components/AddDrink'
import Intro from './components/Intro'
import Navigation from './components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <h1>Bartender App</h1>
      <Navigation/>
      <Intro/>
      <AddDrink/>
    </div>
  );
}

export default App;
