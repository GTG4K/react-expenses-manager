import './Expenses.css';
import { useState } from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../base/Card/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesList from '../ExpensesList/ExpensesList';
import ExpensesChart from '../ExpensesChart/ExpensesChart';

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('2020');
  const filterChangeHandler = (year) => {
    console.log(year);
    setSelectedYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        onFilterChange={filterChangeHandler}
        selected={selectedYear}
      ></ExpenseFilter>
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <ExpensesList expenses={filteredExpenses}></ExpensesList>
    </Card>
  );
}

export default Expenses;
