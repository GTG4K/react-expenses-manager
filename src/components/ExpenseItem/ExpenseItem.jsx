import './ExpenseItem.css';

import { useState } from 'react';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../base/Card/Card';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.price}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
