import React from 'react';
import './App.css';
import AddDrink from './components/AddDrink';
import Intro from './components/Intro';
import Signup from './pages/Signup';
import Recipe from './pages/Recipe';
import About from './pages/About';
import Update from './pages/Update'
import Testapp from './Testapp';
import Navigation from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//send Global Context to all components
export const GlobalContext = React.createContext(null)

function App() {
  
  // --------------- Global state for API url and user Token ------------------------
  //Create global state for all components
  const [globalState, setGlobalState] = React.useState({
    //API URL
    url: "https://project-three-api.herokuapp.com",
    //JWT token
    token: null
  });
  //load initial state
  React.useEffect(() => {
    //get token from local storage
    const token = JSON.parse(window.localStorage.getItem("token"));
    console.log(token);
    //if there is a token in local storage
    if (token) {
      //set globalState to include the token stored in local storage
      setGlobalState({...globalState, token: token.token})
    }
  }, []);
  
  // ----------------- State for drink recipes -------------------------------------
  //define state and setState for drinks
  const [drinks, setDrinks] = React.useState(null)
  const getDrinks = () => {
    fetch(`${globalState.url}/recipe`)
    .then(response => response.json())
    .then((data) => {
      setDrinks(data)
    });
  }
  React.useEffect(() => {
    getDrinks();
  }, []);

  return (
    <GlobalContext.Provider value={{globalState, setGlobalState}}>
    <div className="App">
      <Navigation/>
      <main>
      <Switch>
        <Route exact path='/' render={(rProps) => {
        return <>
          <Intro {...rProps}/>
          <Row>
          <Col></Col>
          <Col className="central">
          <AddDrink {...rProps}/>
          </Col>
          <Col></Col>
          </Row>
        </>}} />
        <Route exact path='/screwit' render={(rProps => <Testapp {...rProps} />)} />
        <Route exact path='/signup' render={(rProps => <Signup {...rProps} />)} />
        <Route exact path='/recipe' render={(rProps => <Recipe {...rProps} />)} /> 
        <Route exact path="/login" render={(rProps => <Login {...rProps} />)} />
        <Route exact path="/update" render={(rProps => <Update {...rProps} />)} />
        <Route exact path="/about" render={(rProps => <About {...rProps} />)} />

      </Switch>
      </main>
    </div>
    </GlobalContext.Provider>
  );
}

export default App;
