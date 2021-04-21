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
- We create component in a *Declarative Approach*: define the desired target state(s) and let React figure out the actual Javascript DOM instruction.
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
- `src\` folder contains all the source code
- `public\` folder includes related static files, image files or .ico files.
- `src\index.js` file is the first file to be executed by node. (Entry-point of this project).
- `public\index.html` all the react codes (js, JSX, css) will be compiled into this file and shipped to the browser.

## React Syntax Introduction

- Render

    ```js
    ReactDOM.render(
        <React.StrictMode>
        <App />
        </React.StrictMode>,
        document.getElementById('root')
    );
    ```

  this will render the `<App />` into the `root` element in the DOM.
- JSX means Javascript XML. It has a special syntax invented by React Team. It's valid in the special enviroment created by the `create-react-app` and by importing`react` from the package. There will be transformation process behind the scene to transform this into browser freindly code.
- Go to the browser side to look at how the real coded compiled by react. for example, `bundle.js`, `main.chunk.js` and so on.
- The code compiled is not just our code but the entire react packge code. This makes two things possible, on our side the code is simple, and on browser side, the code is very complicated but supported by the browser.
- The custom HTML elements is the components in React.


