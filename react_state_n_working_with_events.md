# React States

- Making Apps Interactive & Reactive

  - Handling Events
  - Updating the UI & Working with `State`

- Imperative way of how to listen to evnet

  ```js
  document.getElementById("button").addEventListener();
  ```

- React way of how to listen to event

  ```js
  <button
    onClick={() => {
      console.log("Clicked!");
    }}
  >
    Change Title
  </button>;

  // or equavalently
  const clickHandler = () => {
    // ...
  };
  <button onClick={clickHandler}>Change Title</button>;
  ```

- You should not update `props`'s property or assign `props.key` to some var and change this var to update the rendered HTML. React does not work this way. Because React will not repeart the rendering process when we change the variable, thus changes won't be shown on the HTML.

- In order to solve this problem, we introduce `state` to trigger re-evaluation of react component.

- First we should `import {useState} from 'react'`
- `useState();` be called inside the react component function.
- `useState();` syntax:

  ```js
  import {useState} from 'react'
  // it registers a specific component instance, on a per-component instance basis
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {setTitle('Updated!')}
  return (
      ...
      <h2>{title}</h2>
      ...
      <button onClick={clickHandler}>Change Title</button>
      ...
  );

  ```

- The underhood mechanisam: when we call `setTitle`, it will re-evaluate the current component function with new updated data thus `const [title, setTitle] = useState(props.title);` will also be called. And we get the newest `title`. Also note, react will not re-initialize the state. It will detect that this state has been initialized in the past, i.e. useState will simply return the newest `title` and `setTitle` function for the second and later call.

- Caveat here: `<h2>{props.title}</h2>` will not be updating the `<h2>` content. Why?

- The reason is that `props` is immutable

- States in one component are totally independent with each other.

- `const [enteredDate, setEnteredDate] = useState('');` to set state for non-props value.

- We can also setState for multiple values.

  ```js
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  // notice the set state syntax,
  // we use spread operation here to create a new object, [immutability]
  // this is the way we set new state in the case we do not depend on prevState info
  setUserInput({
    ...userInput,
    enteredTitle: event.target.value,
  });

  // in the case we rely on previous state, or we really need to make sure
  // we are updating the latest state snapshot.
  setUserInput((prevState) => {
    return {
      ...prevState,
      enteredTitle: event.target.value,
    };
  });
  ```

- Summary of above, if we schedule a lot of state updates at the same time, you could be depending on an outdated or incorrect state snapshot if we use first `setUserInput` approach. If we use second `setUserInput` approach, it will guarantee that the state snapshot it gives you here in this inner function, will always be the latest state snapshot, keeping all scheduled state updates in mind. The second approach is a saver way. **Please explain the reason why!**

- `onClick` button event should be avoided. Because, `onClick` is used on anything, and indicates that it was clicked, offering on other context to the intention of the event at all. While `onSubmit` event on the form is used on a form, and indicates that the information is to be submitted to the server at this point.

- In the `submitHandler` we usually disable the default behavior of `onSubmit` event. Because it will derectly send collected form information to the hosting server, and what's worse is that the page will reload which is also the after effect of default behavior of `submit`.

- We can use global variable to make input persist. But use effect we have another very important advange, which is called the two-way binding. We don't just listen, but we can also pass a new value back into the input. That's what we called _two-way binding_. The syntax is as follows

  ```js
  // ExpenseForm.js
  const submitHandler = (event) => {
    ...
    setUserInput((prevState) => {
        return {
            ...prevState,
            enteredTitle: "",
            enteredAmount: "",
            enteredDate: ""
        }
    })
  }

  ...

  <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />

  ...

  // Two-way bindings in ExpensesFilter.js
  ...
  <ExpensesFilter selected={filteredYear} onChangeYear={yearChangeHandler} />
  ...
  ```

- Child to Parent Component Communication: You can accept a function via props and call it from inside the lower-level (child) component to then trigger some action in the parent component (which passed the function).

  ```js
  // Children Component: ExpenseForm
  ...
  const submitHandler = (event) => {
    ...
    // collect data from event
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    // pass data up to parent
    props.onSaveExpenseData(expenseData);
    // clear data
    setUserInput((prevState) => {
        return {
            ...prevState,
            enteredTitle: "",
            enteredAmount: "",
            enteredDate: ""
        }
    })
  };
  ...

  // Parant Component: NewExpense.js
  ...
  const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString(),
      };
      // pass the data further up (NewExpense's parent: App.js).
      props.onAddExpense(expenseData)
    };

    return (
        ...
        // set the event listener to this component on parent level
        <ExpnseForm onSaveExpenseData={saveExpenseDataHandler} />
        ...
    );
  };
  ```

- Currently, we learnt how to pass data from parent to child, child to parent. But have no way to pass data between siblings. The process that the data passed from child to parent is called _Lifting the state up_. The process of passing data down to child from parent is called _Pass state data via props_. This two processes solves the problem of passing data between siblings.

- Like passing data down should not skip component, lift data up is the same, we can only lift data one-level up.

- We usually setState for the data where this data is used for re-rendering.

- Basically, when you are using two-way binding, you are controlling a component. We can categorize components as controlling component and controlled component, or equivalently, presentational(controlled) versus stateful(controlling) components.

- 
