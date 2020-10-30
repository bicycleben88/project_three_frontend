import React, { useState, useEffect } from "react";
import Testrandom from "./components/Testrandom";
import App from './App'

function Testapp() {
    const [results, setResults] =
    React.useState([]);
    const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    const getResults = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setResults(data);
    };

    React.useEffect(() => {
        getResults()
    }, []);

    return (
        <>
            <Testrandom result={results} getResults={getResults}/>
        </>
    );
}

export default Testapp;