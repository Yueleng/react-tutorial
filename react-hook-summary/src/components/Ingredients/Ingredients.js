import React, { useState, useEffect, useCallback } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import ErrorModel from "../UI/ErrorModal";
import Search from "./Search";

function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([]);
  const [filteredIngredients, setFilteredIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    setFilteredIngredients(filteredIngredients);
  }, []);

  // executed after the first render cycle.
  useEffect(() => {
    fetch("https://react-b4926-default-rtdb.firebaseio.com/ingredients.json")
      .then((response) => response.json())
      .then((responseData) => {
        const loadedIngredients = [];
        for (const key in responseData) {
          loadedIngredients.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount,
          });
        }
        setUserIngredients(loadedIngredients);
        setFilteredIngredients(loadedIngredients);
      });
  }, []);

  useEffect(() => {
    console.log("RENDERING INGREDIENTS", userIngredients);
  }, [userIngredients]);

  const addIngredientHandler = (ingredient) => {
    setIsLoading(true);
    fetch("https://react-b4926-default-rtdb.firebaseio.com/ingredients.json", {
      method: "POST",
      body: JSON.stringify(ingredient),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        setIsLoading(false);
        return response.json();
      })
      .then((responseData) => {
        setUserIngredients((prevIngredients) => [
          ...prevIngredients,
          { id: responseData.name, ...ingredient },
        ]);
      });
  };

  const onRemoveIngredientHandler = (id) => {
    setIsLoading(false);
    fetch(
      `https://react-b4926-default-rtdb.firebaseio.com/ingredients/${id}.json`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        setIsLoading(false);
        const updatedUserIngredients = userIngredients.filter(
          (userIngredient) => userIngredient.id !== id
        );
        setUserIngredients(updatedUserIngredients);
      })
      .catch((e) => {
        setError(e.message);
      });
  };

  const clearError = () => {
    setError(null);
    setIsLoading(false);
  };

  return (
    <div className="App">
      {error && <ErrorModel onClose={clearError}>{error}</ErrorModel>}

      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />

      <section>
        <Search
          onLoadIngredients={filteredIngredientsHandler}
          ingredients={userIngredients}
        />
        <IngredientList
          ingredients={filteredIngredients}
          onRemoveItem={onRemoveIngredientHandler}
        />
      </section>
    </div>
  );
}

export default Ingredients;
