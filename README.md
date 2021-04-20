# React Tutorial Notes

## What is React.js

React.js:

- A client-side JavaScript library.
- All about building modern, reactive user interfaces for the web.
- Declarative, component focused approach.

Building Single-Page-Applications(SPAs)

- "Widget" approach on a multi-page-application. (Some) pages are still _rendered on and served by a backend server._
- (More common) React can also be used to _control the entire frontend_ of a web application. "Single-Page-Application" (SPA) approach. _Server only sends one HTML page_, thereafter, React takes over and controls the UI. **Notes: React may request extra information through ajax technology**.

React.js alternatives

- React: Lean and focues component-based UI library. Certain features(e.g. routing) are added via community packages.
- Angular: Complete component-based UI framework, packed with features. Uses TypeScript. Can be overkill for smaller projects. (You don't need to rely on the community as much).
- Vue.js: Kind of the mixture of Angular and React. Complete component-based UI framework, includes most core features. It includes core freatures like routing, more features than react.js but less features than Angular.

About this course & Course Outline

- Basics & Foundation(Theory/Small Demos & Examples):
  - Component & Building UIs
  - Working with Events & Data: "props" and "state"
  - Styling React Apps & Components
  - Introduction into "React Hooks"
- Advanced Concepts(More Realistic (Bigger) Example Projects):
  - Side Effects, "Refs" & More React Hooks
  - Reac's Context API & Redux
  - Forms, Http Requests & "Custom Hooks"
  - Routing, Deployment, NextJS & More
- Summaries & Refershers (Challenges & Exercise)
  - Javascript Refresher
  - ReactJS Summary

## Next-Gen Javascript

- Let & Const: `Let` is the new `var`, while `const` is something you only assign once.
- Arrow Functions: No more issues with `this` keyword!

  ```js
  const myFunc = () => {};

  // traditional way
  function myFunc() {}
  ```

- Exports & Imports(Modules)

  ```js
  // person.js
  const person = {
    name: "Max",
  };
  export default person; // default export

  // utility.js
  export const clean = () => {}; // named export
  export const baseData = 10; // named export

  // app.js
  import person from './person.js';
  import prs from "./person.js"; // you can change name

  import { baseData } from './utility.js'; // you can not change the name
  import { clean } from './utility.js'; 

  // alternative import syntax for named export
  import {baseData as BD} from './person.js';
  import * as bundled from './utility.js';
  ```

- Classes

    ```js
    class Person {
        name = 'Max'
        call = () => {

        }
    }

    const myPerson = new Person();
    myPerson.call();
    console.log(myPerson.name);

    // interitance
    class Person extends Master;

    // example 
    class Human {
        constructor() {
            this.gender = 'male';
        }

        printGender() {
            console.log(this.gender);
        }
    }

    class Person extends Human {
        constructor() {
            super(); // inherited gender attribute and printGender() method.
            this.name = 'Max';
            this.gender = 'female'; // modify the gender attribute
        }

        printMyName() {
            console.log(this.name);
        }
    }

    const person = new Person();
    person.printMyName(); // max
    person.printGender(); // female
    ```

- Classes, Properties & Method (ES6 vs ES7)

    ```js
    // ES 6
    constructor() {
        this.myProperty = 'value';
    }
    // ES7
    myProperty = 'value';
    
    // ES6
    myMethod() {}

    // ES7
    myMethod = () => {}

    // example: ES6/Babel
    class Human {
        gender = 'male';

        printGender = () => {
            console.log(this.gender);
        }
    }

    class Person extends Human {
            
        name = 'Max';
        gender = 'female';

        printMyName = () => {
            console.log(this.name);
        }
    }

    const person = new Person();
    person.printMyName(); // max
    person.printGender(); // female
    ```

- Spread & Rest Operators: `...`
  
  - **Spread**: Used to split up array elements OR object properties

  ```js
  const newArray = [...oldArray, 1, 2];
  const newObject = {
      ...oldObject, 
      newProp: 5 // will update if oldObject has key 'newProp'
  };
  ```

  - **Rest**: Used to merge a list of function arguments into an array.

  ```js
  function sortArgs(...args) {
      return args.sort();
  }

  function filter = (...args) => args.filter(el => el === 1);
  console.log(filter(1,2,3,1));
  ```

- Destructuring: Easily extract array elements or object properties and store them in variables

    ```js
    // Array Destructuring
    [a, b] = ['Hello', 'Max'];
    console.log(a); // Hello
    console.log(b); // Max

    // Object Destructuring
    const {name} = {name: 'Max', age: 28}
    console.log(name); // Max;
    console.log(age); // error;
    ```

- Reference and Primitive Type Refresher

    ```js
    // primative type
    let number = 1;
    let num = number;
    console.log(num); // 1
    number = 2;
    console.log(num); // 1

    // object
    const person = {
        name: 'Max'
    };
    const secondPerson = person; // reference, not copy
    console.log(secondPerson.name); // Max
    person.name = 'Alan';
    console.log(secondPerson.name) // Alan

    // object copy, the correct way.
    const person1 = {
        name: 'Max'
    }
    const secondPerson1 = {...person1}; // copy
    console.log(secondPerson1.name); // Max
    person1.name = 'Alan';
    console.log(secondPerson1.name) // Max
    ```

- Array Functions

    ```js
    // Array.prototype.map()
    const numbers = [1, 2, 3];

    const doubleNumArray = numbers.map(num => num * 2);

    const tripleNumArray = numbers.map((num) => {
        return num * 3;
    });

    console.log(numbers); // [1,2,3]
    console.log(doubleNumArray); // [2,4,6]
    console.log(tripleNumArray); // [3,6,9]

    // Array.prototype.find()
    // Array.prototype.findIndex()
    // Array.prototype.filter()
    // Array.prototype.reduce()
    // Array.prototype.concat()
    // Array.prototype.slice()
    // Array.prototype.splice()
    ```
- 

## Extra Material

- Online Html/js/css runtime enviroment: jsbin.com,
