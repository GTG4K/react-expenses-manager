import './ExpensesList.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem.jsx';

const ExpensesList = (props) => {
  const filteredExpenses = props.expenses;

  return (
    <ul className="expenses-list">
      {filteredExpenses.length === 0 && (
        <h2 className="expenses-list__fallback">Found No Expenses.</h2>
      )}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        ))}
    </ul>
  );
};

export default ExpensesList;
