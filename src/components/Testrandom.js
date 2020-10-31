import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Testrandom = ({ result, getResults }) => {
    // const [results, setResults] =
    // React.useState({});
    // React.useEffect(() => {
    //     setResults(drinks);
    // }, []);

    const strDrinks = () => {
        console.log(result.drinks)
        return result.drinks.map((drink) => {
            return (
                <>
                <Row>
                    <Col></Col>
                    <Col id="randomCol">
                <div key={drink.idDrink}>
                    <div id="contents">
                        <div id="drinkName">
                    <p>{drink.strDrink}</p>
                        </div>
                    <p>{drink.strAlcoholic}</p>
                    <p>{drink.strGlass}</p>
                    <p>{drink.strIngredient1}   {drink.strMeasure1}</p>
                    <p>{drink.strIngredient2}   {drink.strMeasure2}</p>
                    <p>{drink.strIngredient3}   {drink.strMeasure3}</p>
                    <p>{drink.strIngredient4}   {drink.strMeasure4}</p>
                    <p>{drink.strIngredient5}   {drink.strMeasure5}</p>
                    <p>{drink.strIngredient6}   {drink.strMeasure6}</p>
                    <p>{drink.strIngredient7}   {drink.strMeasure7}</p>
                    <p>{drink.strIngredient8}   {drink.strMeasure8}</p>
                    <p>{drink.strIngredient9}   {drink.strMeasure9}</p>
                    <p>{drink.strIngredient10}   {drink.strMeasure10}</p>
                    <p>{drink.strInstructions}</p>
                    </div>
                    <img src={drink.strDrinkThumb} width="600" height="500"></img>
                </div>
                    </Col>
                    <Col></Col>
                </Row>
                </>
            )    
        })
    }

    const loaded = () => {
        return (
            <div>
                <Jumbotron>
                    <h1>Get a Random Drink</h1>
                </Jumbotron>
                <br/>
                <button id="randomButton" onClick={getResults}>Screw It!</button>
                
                {result.length != 0 ? strDrinks() : <p>No drink</p>}            
            </div>
        )
    }

    return result ? loaded() : <h1>Loading...</h1>
};

export default Testrandom;