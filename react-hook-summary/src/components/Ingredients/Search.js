import React, { useEffect, useState, useRef } from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo((props) => {
  const [enteredFilter, setEnteredFilter] = useState("");
  const inputRef = useRef();
  const { ingredients, onLoadIngredients } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        // const query = `?orderBy="title"&equalTo="${enteredFilter}"`;

        let filteredIngredients = ingredients.filter(
          (ingredient) => ingredient.title === enteredFilter
        );

        if (enteredFilter.trim() === "") {
          filteredIngredients = [...ingredients];
        }

        onLoadIngredients(filteredIngredients);
      }
    }, 500);

    // return the function that runs before next run of useEffect
    // If you have `[]` as dependencies (i.e. the effect only runs once)
    // the cleanup function runs when the component gets unmounted
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, ingredients, onLoadIngredients, inputRef]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            ref={inputRef}
            type="text"
            value={enteredFilter}
            onChange={(event) => setEnteredFilter(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
