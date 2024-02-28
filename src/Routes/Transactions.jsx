import { useState } from "react";
import { Link } from "react-router-dom";


function Transactions({ transactions }) {
  if (transactions.length === 0) return null;

  function formatDateToMonthDay(dateString) {
    const date = new Date(dateString);
    const month = date.toLocaleString('en-US', { month: 'short' });
    const day = date.getDate();
    return `${month} ${day}`;
  }

  function calculateBankTotal(transactions) {
    let total = 0;
    transactions.forEach(transaction => {
      total += transaction.amount;
    });
    return total;
  }
  
  return (
    <div className="Transactions-Wrapper">
      <h1>Transactions</h1>
      <h2>Account bank Total: ${calculateBankTotal(transactions)}</h2>
      {transactions.map(({ id, item_name, amount, date, from, category, transactionType }) => (
        <div key={id} className="Transaction">
          <h3>{formatDateToMonthDay(date)}</h3>
          <h3>{item_name}</h3>
          <h3>{amount}</h3>
          <Link to={`/${id}`}>
            <button>Details</button>
          </Link>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Transactions