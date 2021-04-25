import { useState } from "react";

import "./NewExpense.css";
import ExpnseForm from "./ExpenseForm";

const NewExpense = (props) => {
  // state to show is the form editing or not.
  const [isEditingExpenseForm, setIsEditingValue] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log('In NewExpense');
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditingValue(false); // save also will close form editing.
  };

  const startEditingHandler = () => {
    setIsEditingValue(true);
  };

  const cancelEditingHandler = () => {
    setIsEditingValue(false);
  };

  return (
    <div className="new-expense">
      {!isEditingExpenseForm ? (
        <button onClick={startEditingHandler}> Add New Expense</button>
      ) : (
        <ExpnseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onExpenseFormCanceled={cancelEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
