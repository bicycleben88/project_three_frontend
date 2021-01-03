import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";


const Testrandom = ({ result, getResults }) => {

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
                    <h1>{drink.strDrink}</h1>
                    <img src={drink.strDrinkThumb} width="600" height="500"></img>
                    <p>{drink.strAlcoholic}</p>
                    <p>{drink.strGlass}</p>
                    <h2>Ingredients</h2>
                    <hr style={{border:" 1px solid #f4dbaf", margin:"0% 20% 0% 20%"}}/>
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
                    <h2>Instructions</h2>
                    <hr style={{border:" 1px solid #f4dbaf", margin:"0% 20% 0% 20%"}}/>
                    <p>{drink.strInstructions}</p>
                    </div>
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
                    <h1>Random Drink</h1>
                    <h5 className="introtext"> Select the "Screw It!" button below to generate a ranom drink</h5>

                </Jumbotron>
                <br/>
                <Button size="lg" className="screw buttons" variant="dark" onClick={getResults}> Screw It! </Button>
                
                {result.length != 0 ? strDrinks() : <p>No drink</p>}            
            </div>
        )
    }

    return result ? loaded() : <h1>Mixing...</h1>
};

export default Testrandom;