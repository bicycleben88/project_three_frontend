import React from 'react';
import './App.css';
import AddDrink from './components/AddDrink';
import Intro from './components/Intro';
import Signup from './pages/Signup';
import Navigation from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
    
        <Navigation/>
      
      <main>
      <Switch>
        <Route exact path='/' render={(rProps) => {
        return <>
          <Intro {...rProps}/>
          <AddDrink/>
        </>}} />
        <Route exact path='/signup' render={(rProps => <Signup {...rProps} />)} />
      </Switch>
      </main>
    </div>
  );
}

export default App;
