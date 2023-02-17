import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense(props) {
  const [formVisible, setFormVisible] = useState(false);

  const SaveExpenseDataHandler = (ExpenseData) => {
    const expenseData = {
      ...ExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFormVisible(!formVisible);
  };

  const toggleForm = () => {
    setFormVisible(!formVisible);
  };

  if (!formVisible) {
    return (
      <div className="new-expense">
        <button type="button" onClick={toggleForm}>
          Add New Expense
        </button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={SaveExpenseDataHandler}
        onCloseForm={toggleForm}
      ></ExpenseForm>
    </div>
  );
}

export default NewExpense;
