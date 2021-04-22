# React Basics

- React is a Javascript library for building user interfaces.
- HTML, CSSS & Javascripit are about building user interfaces as well.
- React makes building complex, interactive and reactive user interfaces simpler and less error prone.
- Focus on core business logics instead of focusing on the actual steps of updating the page when sth happens somewhere.
- In order to do the above point, React embraces a concept called components. React is all about components.
- All user interfaces in the end are made up of components.
- Components are in the end just a combination of HTML code, CSS code and (possible) js code for the logic.
- You can reuse the component traits and generate multiple similar components.
- Why Components
  - Resuablility: Don't repeat yourself
  - Separation of Concerns: Don't do too many things in one and the same place (function). Split big chunks of code into multiple smaller functions.

## Components

- How is a component Built
  - We combine HTML, CSS and JS in component
  - We combine components to make the entire user interface.
- We create component in a _Declarative Approach_: define the desired target state(s) and let React figure out the actual Javascript DOM instruction.
- You don't write these concrete DOM updating instructions on your own. (Vanilla Js tradition)
- Build your own, custom HTML Elements (JSX), and combine them together for building a user interface.

## create-react-app

- A tool to create react projects
- Come with pre-configured folders with basic react code files and a bunch of configuration files help to build react app for production use.
- There is a transformation/optimization between development and running react app.
- Come with a nice development environment with a development web server(Node?) which allows you to preview the application locally on your machine.
- Browser will automatically update the page whenever you made the changes in your code.
- Optimize our react code before we push it to the production server.
- Should install `Node` first. A runtime for Javascript which allows you to run js outside browser.
- To run `npx create-react-app my-app` command, we need node.js installed
- This project created by `create-react-app` will use this development preview server.
- Install and run the app:

  ```js
  npx create-react-app my-app
  cd my-app
  npm start // start the node server
  ```

- Go to `localhost:3000` if browser was not poped up.
- `npm install` is used when you pulled other's project from github and what to install all the packages the project use. This command works as follows: it will parse the `package.json` file and download corresponding packages. (The project you pulled from github always comes with `package.json` file)

## Project Structure

- `package.json` contains all the packages used in this project
- `public\` folder includes related static files, image files or .ico files, etc.
- `public\index.html` all the react codes (js, JSX, css) will be compiled into this file and shipped to the browser.
- `src\` folder contains all the source code
- `src\index.js` file is the first file to be executed by node. (Entry-point of this project).
- `src\components\` contains all the developer defined components

## React Syntax Introduction

- Render

  ```js
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
  ```

  this will render the `<App />` into the `root` element in the DOM.\
  In usual projects, `<App />` component is the root components and all other components are the children of `<App />`, like the components tree.

- JSX means Javascript XML. It has a special syntax invented by React Team. It's valid in the special enviroment created by the `create-react-app` and by importing`react` from the package. There will be transformation process behind the scene to transform this into browser freindly code.
- Go to the browser side to look at how the real coded compiled by react. for example, `bundle.js`, `main.chunk.js` and so on.
- The code compiled is not just our code but the entire react packge code. This makes two things possible, on our side the code is simple, and on browser side, the code is very complicated but supported by the browser.
- The custom HTML elements is the components in React.
- Imperative vs Declarative

  ```js
  // Imperative
  const para = document.createElement("p");
  para.textContent = "This is also visible";
  document.getElementById("root").append(para);

  // Declarative
  function App() {
    return (
      <div>
        <p> This is also visible </p>
      </div>
    );
  }

  export default App;
  ```

- A component in React is just a Javascript function. Lower case element are built in HTML elements (`div`, `h1`) and Upper case element are (developer defined) React Components (`App`).
- Insert the component as children of another component

  ```js
  // A component file: A.js
  import B from './path/to/B';
  ...
  <div>
    <B></B>
  </div>
  ...

  ```

- With react version v17.x, it is not necessary to `import React from 'react'` in all the files as a whole package. However, we may need to do so when using Hooks. This significant changes came into effect when the react core-team has identified the observation in the old JSX transform.
  As per official react blog:\
  To solve these issues, React 17 introduces two new entry points to the React package that are intended to only be used by compilers like `Babel` and `TypeScript`. Instead of transforming JSX to `React.createElement`, the new JSX transform automatically imports special functions from those new entry points in the React package and calls them.\
  For more information: https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html\
  While in the past you have to `import React from 'react'` wherever we use `JSX`.
- In one `ComponentName.js` file, we can only export _one_ HTML element / React Component. We should wrap components in one component/HTML element.
- In JSX, the `class` attribute is transformed into `<div className = "" > </div>`. Because `class` is a reserved word in javascript.
- Insert js into JSX

  ```js
  <h2> {Math.random()} </h2>
  ```

- It's super easy to reuse an component

  ```js
  <div className="App">
    <h2>Let's get started!</h2>
    <ExpenseItem></ExpenseItem>
    <ExpenseItem></ExpenseItem>
  </div>
  ```

- Passing Data via "Props"

  ```js
  // App.js
  function App() {
    const expenses = [
      {
        id: "e1",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2020, 7, 14),
      }
      ...
    ];

    return (
      ...
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpenseItem>
      ...
    );
  }

  // ExpenseItem.js, with `props` we can render data dynamically.
  function ExpenseItem(props) {
    return (
        <div className = "expense-item">
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    )
  }
  ```

- Base on the above example, we can also pass `props` into the child component of `ExpenseItem` component, i.e., we passed the `props` into the grandchildren(and could be even further) of `App` component. i.e. `App -> ExpenseItem -> ExpenseDate`, if we include/create `ExpenseDate` component in `ExpenseItem` component.

- Building user interface from smaller building blocks is called composition.

- It is not valid syntax to _directly_ use user defined component as wrapper component, for example the following code snippet.

  ```js
  // ExpenseItem.js
  // Wrong Syntax, card may not be used directly as a wrapper component
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
  ```

- To Solve the above problem, we may need to include `props.children` in the definition of `Card` component. See the following code

  ```js
  // Card.js
  function Card(props) {
    const classes = "card " + props.className; // props.className is the passed className attribute from the outside
    return <div className={classes}>{props.children}</div>; // props.children will receive the children from outside
  }
  ```

  The React docs say that you can use props.children on components that represent 'generic boxes' and that 'don’t know their children ahead of time'. This is called the composition.

- Dive into `JSX`. The following are equivalent

  ```js
  // no need to import react. Compiler of React 17.0+ takes care of that
  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );

  // Behind the hood
  import React from 'react';
  return React.createElement(
    'div',
    {},
    React.createElement('h2', {}, "Let's get started!"),
    React.createElement(Expenses, {expenses: expenses}),
  );
  ```

- Alternative Function Syntax, the following function def are equivalent

  ```js
  // use function
  function App() {
    return (...)
  }
  export default App;

  // Arrow function and assign to App
  const App = () => {

  }
  export default App;
  ```

- Q: How can you output dynamic data in React components (i.e. in the returned JSX code)? \
  A: You can use single curly braces (opening & closing) with any JS expression between them. You can't put block statements (e.g. if statements) between those curly braces.
  