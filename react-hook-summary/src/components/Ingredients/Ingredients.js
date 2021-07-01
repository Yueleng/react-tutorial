import React, {
  useReducer,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import ErrorModel from "../UI/ErrorModal";
import Search from "./Search";
import useHttp from "../../hooks/http";

// define reducer outside the Ingredients to avoid unnecessary re-creation.
const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter((ing) => ing.id !== action.id);
    default:
      throw new Error("Should not get there!");
  }
};

// const httpReducer = (httpState, action) => {
//   switch (action.type) {
//     case "SEND":
//       return { loading: true, error: null };
//     case "RESPONSE":
//       return { ...httpState, loading: false };
//     case "ERROR":
//       return { loading: false, error: action.errorMessage };
//     case "CLEAR":
//       return { loading: false, error: null };
//     default:
//       throw new Error("Should not be reached!");
//   }
// };

function Ingredients() {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);

  // const [userIngredients, setUserIngredients] = useState([]);
  const [filteredIngredients, setFilteredIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  const {
    isLoading,
    error,
    data,
    sendRequest,
    reqExtra,
    reqIdentifier,
    clear,
  } = useHttp();

  useEffect(() => {
    if (!isLoading && !error && reqIdentifier === "REMOVE_INGREDIENT") {
      dispatch({ type: "DELETE", id: reqExtra });
    } else if (!isLoading && !error && reqIdentifier === "ADD_INGREDIENT") {
      dispatch({ type: "ADD", ingredient: { id: data.name, ...reqExtra } });
    }
  }, [data, reqExtra, reqIdentifier, isLoading, error]);

  // const [httpState, dispatchHttp] = useReducer(httpReducer, {
  //   loading: false,
  //   error: null,
  // });

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
        dispatch({ type: "SET", ingredients: loadedIngredients });
        setFilteredIngredients(loadedIngredients);
      });
  }, []);

  useEffect(() => {
    console.log("RENDERING INGREDIENTS", userIngredients);
  }, [userIngredients]);

  // const addIngredientHandler = useCallback((ingredient) => {
  //   // setIsLoading(true);
  //   dispatchHttp({ type: "SEND" });
  //   fetch("https://react-b4926-default-rtdb.firebaseio.com/ingredients.json", {
  //     method: "POST",
  //     body: JSON.stringify(ingredient),
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then((response) => {
  //       // setIsLoading(false);
  //       dispatchHttp({ type: "RESPONSE" });
  //       return response.json();
  //     })
  //     .then((responseData) => {
  //       // setUserIngredients((prevIngredients) => [
  //       //   ...prevIngredients,
  //       //   { id: responseData.name, ...ingredient },
  //       // ]);

  //       dispatch({
  //         type: "ADD",
  //         ingredient: { id: responseData.name, ...ingredient },
  //       });
  //     });
  // }, []);

  const addIngredientHandler = useCallback(
    (ingredient) => {
      sendRequest(
        "https://react-b4926-default-rtdb.firebaseio.com/ingredients.json", // url
        "POST", // method
        JSON.stringify(ingredient), // body,
        ingredient, // reqExtra
        "ADD_INGREDIENT" // identifier
      );
    },
    [sendRequest]
  );

  // const onRemoveIngredientHandler = useCallback((id) => {
  //   // setIsLoading(true);
  //   dispatchHttp({ type: "SEND" });
  //   fetch(
  //     `https://react-b4926-default-rtdb.firebaseio.com/ingredients/${id}.json`,
  //     {
  //       method: "DELETE",
  //     }
  //   )
  //     .then((response) => {
  //       // setIsLoading(false);
  //       dispatchHttp({ type: "RESPONSE" });

  //       // const updatedUserIngredients = userIngredients.filter(
  //       //   (userIngredient) => userIngredient.id !== id
  //       // );
  //       // setUserIngredients(updatedUserIngredients);
  //       dispatch({ type: "DELETE", id: id });
  //     })
  //     .catch((e) => {
  //       // setError(e.message);
  //       dispatchHttp({ type: "ERROR", errorMessage: e.message });
  //     });
  // }, []);

  const onRemoveIngredientHandler = useCallback(
    (ingredientId) => {
      sendRequest(
        `https://react-b4926-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json`,
        "DELETE",
        null,
        ingredientId,
        "REMOVE_INGREDIENT"
      );
    },
    [sendRequest]
  );

  // const clearError = useCallback(() => {
  //   // setError(null);
  //   // setIsLoading(false);
  //   dispatchHttp({ type: "CLEAR" });
  // }, []);

  // Alternative to React.memo
  const ingredientList = useMemo(() => {
    return (
      <IngredientList
        ingredients={filteredIngredients}
        onRemoveItem={onRemoveIngredientHandler}
      />
    );
  }, [filteredIngredients, onRemoveIngredientHandler]);

  return (
    <div className="App">
      {error && <ErrorModel onClose={clear}>{error}</ErrorModel>}

      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />

      <section>
        <Search
          onLoadIngredients={filteredIngredientsHandler}
          ingredients={userIngredients}
        />

        {ingredientList}
        {/* <IngredientList
          ingredients={filteredIngredients}
          onRemoveItem={onRemoveIngredientHandler}
        /> */}
      </section>
    </div>
  );
}

export default Ingredients;
