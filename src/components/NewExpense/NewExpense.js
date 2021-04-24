import "./NewExpense.css";
import ExpnseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log('In NewExpense');
    // console.log(expenseData);
    props.onAddExpense(expenseData)
  };

  return (
    <div className="new-expense">
      <ExpnseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;