import React from 'react'
import {GlobalContext} from '../App';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
      
      <Row>
          <Col></Col>
          <Col>
          
      <p className="recipe midform">Make the recipes appear here plz</p>
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

          </Col>
          <Col></Col>
          </Row>
    </>
  );
};



export default Recipe