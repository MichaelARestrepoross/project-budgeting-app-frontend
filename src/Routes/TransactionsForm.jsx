import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

function TransactionsForm({setTransactions}) {

  const navigate = useNavigate();
  const { id } = useParams();

  const [transaction,setTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
    transactionType: ""
  });

  function handleCancel() {
    navigate("/");
  }

  function handleChange(e) {
    const { name, value } = e.target;
    let newTransactionType = "";
    if (name === "amount") {
      const floatValue = parseFloat(value);
      newTransactionType = floatValue > 0 ? "Addition" : (floatValue < 0 ? "Deduction" : "");
    }
    setTransaction(prevTransaction => ({
      ...prevTransaction,
      [name]: value,
      transactionType: name === "amount" ? newTransactionType : prevTransaction.transactionType
    }));
  }


  function handleSubmit(e) {
    // e.preventDefault();
    if (id) {
      // Handle edit
    }else{
      // Handle create
    }
  }
  return (
    <div>
      <h1>TransactionsForm</h1>
      <form onSubmit={handleSubmit}>
        Transaction Name: 
        <label htmlFor="item_name">
          <input
            onChange={handleChange}
            type="text"
            id="item_name"
            name="item_name"
            value={transaction.item_name}
          />
        </label><br />
        Amount:$
        <label htmlFor="amount">
          <input
            onChange={handleChange}
            type="number"
            id="amount"
            name="amount"
            value={transaction.amount}
          />
        </label><br />
        The Date: 
        <label htmlFor="date">
          <input
            onChange={handleChange}
            type="date"
            id="date"
            name="date"
            value={transaction.date}
          />
        </label><br />
        From who: 
        <label htmlFor="from">
          <input
            onChange={handleChange}
            type="text"
            id="from"
            name="from"
            value={transaction.from}
          />
        </label><br />
        Category: 
        <label htmlFor="category">
          <input
              onChange={handleChange}
              type="text"
              id="category"
              name="category"
              value={transaction.category}
          />
        </label><br />
        <br /><button type="submit">Submit</button><br />
      </form>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  )
}

export default TransactionsForm