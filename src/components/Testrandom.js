import React from "react";

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
                <div key={drink.idDrink}>
                    <p>{drink.strDrink}</p>
                    <p>{drink.strAlcoholic}</p>
                    <p>{drink.strCategory}</p>
                    <img src={drink.strDrinkThumb} width="300" height="400"></img>
                </div>
            )    
        })
    }

    const loaded = () => {
        return (
            <div>
                <h1>Get a Random Drink!</h1>
                <button onClick={getResults}>Screw It!</button> 
                {result.length != 0 ? strDrinks() : <p>No drink</p>}            
            </div>
        )
    }

    return result ? loaded() : <h1>Loading...</h1>
};

export default Testrandom;