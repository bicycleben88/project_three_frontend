import React from 'react';
import './App.css';
import AddDrink from './components/AddDrink';
import Intro from './components/Intro';
import Signup from './pages/Signup';
import Navigation from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//send Global Context to all components
export const GlobalContext = React.createContext(null)

function App() {
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

 
  return (
    <GlobalContext.Provider value={{globalState, setGlobalState}}>
    <div className="App">
      <Navigation/>
      <main>
      <Switch>
        <Route exact path='/' render={(rProps) => {
        return <>
          <Intro {...rProps}/>
          <AddDrink {...rProps}/>
        </>}} />
        <Route exact path='/signup' render={(rProps => <Signup {...rProps} />)} />
      </Switch>
      </main>
    </div>
    </GlobalContext.Provider>
  );
}

export default App;
