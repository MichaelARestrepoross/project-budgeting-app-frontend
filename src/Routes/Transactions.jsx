import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Transactions({ transactions, setTransactions }) {
  if (transactions.length === 0) return null;


  function handleDelete(id) {
    axios.delete(`http://localhost:8889/api/transactions/${id}`)
      .then((res) => {
        setTransactions(transactions.filter(transaction => transaction.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting transaction:", error);
      });
  }

  return (
    <div>
      <h1>Transactions</h1>
      {transactions.map(({ id, item_name, amount, date, from, category, transactionType }) => (
        <div key={id}>
          <h3>{date}</h3>
          <h3>{item_name}</h3>
          <h2>{amount}</h2>
          <Link to={`/${id}`}>
            <button>Details</button>
          </Link>
          <button onClick={() => handleDelete(id)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Transactions