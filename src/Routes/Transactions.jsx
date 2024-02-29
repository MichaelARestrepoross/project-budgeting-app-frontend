import { useState } from "react";
import { Link } from "react-router-dom";
import "./Transactions.css"


function Transactions({ transactions }) {
  
  function formatDateToMonthDay(dateString) {
    const date = new Date(dateString);
    const month = date.toLocaleString('en-US', { month: 'short' });
    const day = date.getDate();
    return `${month} ${day}`;
  }
  
  function calculateBankTotal(transactions) {
    let total = 0;
    if (transactions && transactions.length > 0) {
      transactions.forEach(transaction => {
        if (transaction.amount !== undefined) {
          total += transaction.amount;
        }
      });
    }
    return total;
  }
  
  
  if (transactions.length === 0) return null;

  return (
    <div className="Transactions-Wrapper">
      <h1>Transactions</h1>
      <h2>Account bank Total: ${calculateBankTotal(transactions)}</h2>
      {transactions.map(({ id, item_name, amount, date, from, category, transactionType }) => (
        <div key={id} className= {`Transaction ${transactionType}`} >
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