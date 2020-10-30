import React from 'react'
import {GlobalContext} from '../App';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'

const Recipe = (props) => {
  //Deconstruct globalState and setGlobalState and pass into useContext
  const { globalState, setGlobalState } = React.useContext(GlobalContext);
  const { url } = globalState;

  return (
    <>
      <Jumbotron>
        <Container>
          <h1>Recipes</h1>
        </Container>
      </Jumbotron>
      
      <p>Make the recipes appear here plz</p>
      {/* <table>
          <tbody>
            {state.recipes.map(recipe => (
              <tr key={recipe._id}>
                  
                <td>{recipe.image}</td>
                <td>{recipe.name}</td>
                <td>{recipe.ingredient}</td>
                <td>{recipe.instructions}</td>
    
              </tr>
            ))}
          </tbody>
       </table> */}

    </>
  );
};



export default Recipe