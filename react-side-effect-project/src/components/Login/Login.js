import React, { useEffect, useReducer, useState, useContext, useRef } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

import classes from "./Login.module.css";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      ...state,
      value: action.val,
      isValid: action.val.includes("@"),
    };
  }

  if (action.type === "INPUT_BLUR") {
    console.log("onBlur email");
    return { ...state, isValid: state.value.includes("@") };
  }

  return {
    value: "",
    isValid: false,
  };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      ...state,
      value: action.val,
      isValid: action.val.trim().length > 6,
    };
  }

  if (action.type === "INPUT_BLUR") {
    console.log("onBlur password");
    return { ...state, isValid: state.value.trim().length > 6 };
  }

  return {
    value: "",
    isValid: false,
  };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // initialize reducer
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: undefined,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: undefined,
  });

  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const { isValid: emailIsValid } = emailState; // destructure
  const { isValid: passwordIsValid } = passwordState; // destructure

  useEffect(() => {
    const timerIdentifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(
        // emailState.value.includes("@") && passwordState.value.trim().length > 6
        // emailState.isValid && passwordState.isValid
        emailIsValid && passwordIsValid
      );
    }, 500);

    return () => {
      console.log("ClEANUP");
      clearInterval(timerIdentifier);
    };
    // better than [emailState, passwordState]
    // same as [emailState.isValid, passwordState.isValid]
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
    
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          isValid={emailState.isValid}
          id="email"
          label="E-Mail"
          type="email"
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          ref={emailInputRef}
        />

        <Input
          isValid={passwordState.isValid}
          id="password"
          label="Password"
          type="password"
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          ref={passwordInputRef}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
