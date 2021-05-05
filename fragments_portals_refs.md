# Fragments, Portals and Refs

- JSX limitations & Fragments
- Getting a Cleaner DOM with Portals
- Working with Refs

## JSX Limitations

- You can't return more than one "root" JSX element (you also can't store more than one "root") JSX element in a variable).

  ```js
  return (
      <h2> Hi there </h2>
      <p> This does not work :-( </p>
  )
  ```

  The topmost element, which you store or return must be one element. Because the following isn't valid JavaScript.

  ```js
  return (
    React.createElement("h2", {}, "Hi there!"),
    React.createElement("p", {}, "This does not work :-(")
  );
  ```

  Solution: always wrap ajacent elements with `<div></div>` or any custom wrapper component. Another solution being a native _javascript array_

  ```js
  return [<h2> Hi there </h2>, <p> This does not work :-( </p>];
  ```

  React could work with arrays of JSX elements, don't forget the key for every element.

- A new Problem: `<div>` Soup: In bigger apps, you can easily end up with _tons of unnecessary divs_ (or other elements) which add _no semantic meaning or structure_ to the page but are only there because of React's/JSX' requirement.

- Creating a Wrapper component. `react-wrapper-fragment-refs-project/src/components/Helpers/Wrapper.js` to get rid of `<div>` soup.

- Even better solution: `<React.Fragment></React.Fragment>` or `<></>` the behind the scene mechanism is similar with what we did with `Wrapper` component.

## Understanding React Portals

- Problem we previously have: we nest modal in our component, while this one should be above all. See `react-wrapper-fragment-refs-project/src/components/Users/AddUser.js` and see the position of `<ErrorModal>` in the return statement.

- By using `Portals` we can write our JSX code as follows

  ```js
  return (
    <React.Fragment>
      <MyModal />
      <MyInputForm />
    </React.Fragment>
  );
  ```

  while having rendered dom with modal somewhere else, outside the nested structure.

- React DOM is kind of the adapter from React to the DOM.
- See example code in `index.html` and `ErrorModal.js`. By introducing `ReactDOM.createPortal()` we actually pass data one more layer. One trick: in `ReactDOM.createPortal()` we try not to come up with new attribute names, just pass data to next level.
- `ReactDOM.createPortal` could be used anywhere we wrote JSX.

## Ref

- Why Ref? A: Sometimes, we only need to read the data instead of modifying and reading in which case two-way binding state handles it well. In the one-way binding senario, ref binds the reference to a component: set`ref={nameInputRef}` in the `<input></input>` component, and we get info from the following: `nameInputRef.current.value`. This is a one way binding implementation, and we don't need to monitor every single key stroke event. We only need the input value in the senario when submitting the input, and we try to read the info from the `nameInputRef.current.value`.

- You really should not modify DOM yourself. Leave it to React. But reading info from DOM is fine. So, modify input value by `nameInputRef.current.value = ''` is a bad implementation.

- compare `react-practice-project/../AddUser.js` and `react-wrapper-fragment-refs/../AddUser.js` to see the difference between `state` and `ref` way to implement two-way data binding.

## Controled & Uncontroled components

- In `input` or `form` components in general, if the component is not controlled by react, we say that this component is uncontrolled. we we use `ref` instead of `state`, we actually change the `input` component from controlled to uncontrolled.

  ```js
  // uncontrolled component
  <input id="username" type="text" ref={nameInputRef} />

  // controlled component
  <input value={enteredUsername} id="username" type="text" onChange={nameChangedHandler} />
  ```

