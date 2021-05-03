import { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(); // default: null? undefined?

  const addUserHandler = (event) => {
    // prevent from reloading.
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty) values.",
      });
      return;
    }

    // js fancy way to convert string to number
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }

    // lifting state up
    props.onAddUser({
      name: enteredUsername,
      age: enteredAge,
      id: Math.random().toString(),
    });

    setEnteredUsername("");
    setEnteredAge("");
  };

  const nameChangedHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorOKButtonHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorOKButtonHandler}
        />
      )}

      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            value={enteredUsername}
            id="username"
            type="text"
            onChange={nameChangedHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            value={enteredAge}
            id="age"
            type="number"
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
