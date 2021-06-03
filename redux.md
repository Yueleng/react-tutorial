# Redux

- What is Redux and Why?
- Redux Basics & Using Redux with React
- Redux Toolkit

## What is Redux

- A state management system for cross-component or app-wide state

### Local State

- State that belongs to a single component
- E.g. listing to user input in an input field; toggling a _show more_ details field.
- Should be manged component-internal with `useState()` / `useReducer()`

### Cross-component state

- State that affects multiple components
- E.g. opne/closed state of a modal overlay
- Requires _prop chains_ and _prop drilling_

### App-Wide State

- State that affects entire app (most/all components)
- E.g. user authentication status
- Requires _prop chains_ and _prop drilling_

### Summary

- React Context or Redux solves the cross-component and app-wide problem.

## Why we need Redux

- Don't we have React Context already?
- Redux and React context is not either or problem. You can mix them up in the development.
- React context - Potential disadvantage

  - Complex Setup / Management
  - Multiple Context

  ```js
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <UIInteractionContextProvider>
          <MultiStepFormContextProvider>
            <UserRegistration />
          </MultiStepFormContextProvider>
        </UIInteractionContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
  ```

  In more complex apps, managing React Context can lead to deeply nested JSX code and /or huge _Context Provider_ components

  - React Context is not optimized for high-frequency state changes.

## Core Redux Concepts

- Central Data (Store)
- Components subsribe data from Central Data Store
- Components dispatch action whenever possible.
- Action is forwarded to Reducer function.
- Reducer Function is responsible for mutating (store) data. (Not `useReducer` hook but similar idea) and thus changes rerendering the component UI.

## The Reducer Function

- Should be pure function: same input leads to same output.
- Inputs: Old State + Dispatched Action
- Output: New State Object
