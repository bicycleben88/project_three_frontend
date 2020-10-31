import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container';

function App() {
    const [drinks, setDrinks] = React.useState([])
    // const emptyDrink = {
    //     name: {props.drink.strDrink},
    //     img: {props.drink.strDrinkThumb},
    //     ingredients: {}
    // }
    const emptyDrink = {
        name: "",
        img: "",
        ingredients: "",
        instructions: "",
    }

    const [selectedDrink, setSelectedDrink] = React.useState(emptyDrink)

    const getDrinks = () => {
        fetch(url + "/recipe")
        .then(response => response.json())
        .then(data => {
            setDrinks(data)
        })
    }

    React.useEffect(() => {
        getDrinks()
    }, [])

    const handleUpdate = (drink) => {
        fetch(url + "/recipe" + drink._id, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(drink),
        }).then((response) => getDrinks());
    };

    const selectDrink = (drink) => {
        setSelectedDrink(drink)
    };

    const deleteDrink = (drink) => {
        fetch(url + "/recipe" + drink._id, {
            method: "delete",
        }).then((response) => getDrinks());
    }
    return (
        <div className="Update">
            <Jumbotron>
                <Container>
                    <h1>Recipes</h1>
                </Container>
            </Jumbotron>
            <Link to="/recipe">
            <Button className="headspace buttons" variant="dark">Edit</Button>
            </Link>
            <main>
        {/* there are three routes below */}
        <Switch>
          <Route
            exact
            path="/"
            render={(rp) => <Display selectDrink={selectDrink} {...rp} drinks={drinks} 
            deleteDrink={deleteDrinks} />}
          />
          {/* <Route
            exact
            path="/create"
            render={(rp) => (
              <Form {...rp} label="create" drink={emptyDrink} handleSubmit={handleCreate} />
            )}
          /> */}
          <Route
            exact
            path="/edit"
            render={(rp) => (
              <Form {...rp} label="update" drink={selectedDrink} handleSubmit={handleUpdate} />
            )}
          />
        </Switch>
      </main>
        </div>
    )
}

export default App;

// const Drinks = {
//     name: {props.drink},
//     img: {props.drink.img}
//     ingredients: {props.drink.ingredients},
//     instructions: {props.drink.instructions},
//   };

// const Update = (props) => {
//     const [drink, setDrink] = useState(Drinks);

//     return (
//         <>
//         <Jumbotron>
//             <Container>
//                 <h1>Edit Drink</h1>
//             </Container>
//         </Jumbotron>
//         <
//         </>
//     )
// }