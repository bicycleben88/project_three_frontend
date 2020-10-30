import React from "react";

const Testrandom = (props) => {
    const {drinks, getResults} = props
    const [results, setResults] =
    React.useState({});
    console.log(drinks);
    React.useEffect(() => {
        setResults(drinks);
    }, []);

    const strDrinks = () => {
        return(
            results.drinks.map((drink)=> {
                return ( 
                <p>{drink.strDrink}</p>)
            })
        )
    }
    const loaded = () => {
        return (
            <div>
                <h1>Get a Random Drink!</h1>
                {/* {drinks[0].strDrink ? strDrink() : null} */}
                <button onClick={getResults}>Screw It!</button> 
                {Object.keys(drinks).length > 0 ? strDrinks() : <p>No drinks</p>}            
            </div>
        )
    }

    return results ? loaded():<h1>Loading...</h1>
};

export default Testrandom;