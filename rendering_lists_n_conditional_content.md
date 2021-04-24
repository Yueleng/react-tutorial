# Reandering Lists & Conditional Content

- Outputting Dynamic List of Content
- Rendering Content Under Certain Conditions
- By using map syntax:

  ```js
  return(
  ...
  {
    props.expenses.map(expense => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  ...
  )
  ```

- Spread Operator also holds on array in addition to

  ```js
  const addExpenseHandler = (expense) => {
    setExpenses([...expenses, expense]);
  };
  // this is better
  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [...prevState, expense];
    });
  };
  ```

- When rendering components in the list, don't forget to add `key` attribute to every element, otherwise it has the following two problems.
  - From the performance perspective, react has to render each component in the list again. This leads to low performance if we have a long list.
  - Further, it may also lead to bugs, when the component in the list has states itself. This will lead to state info loss, when react re-render every component.
- `key` helps react identify which component already exists in the list and will only focus on rendering new components.
- We can have ternary expressions to output contitonal content.

  ```js
  {
    filteredExpenses.length === 0 ? (
      // jsx
    ) : (
      // jsx
    );
  }
  ```

- [Use ternaries rather than && in JSX](https://kentcdodds.com/blog/use-ternaries-rather-than-and-and-in-jsx)
- `style` as HTML attribute works a bit different as in JSX. It accepts a js object as a value. `style` accepts both `{'background-color': 'red'}` and `{'backgroundColor': 'red'}`
- number conversion:

  ```js
  const expenseData = {
    title: userInput.enteredTitle,
    amount: +userInput.enteredAmount,
    date: new Date(userInput.enteredDate),
  };
  ```
