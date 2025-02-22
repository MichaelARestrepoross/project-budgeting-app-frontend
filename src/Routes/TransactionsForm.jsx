import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import "./TransactionsForm.css"
import axios from 'axios';

function TransactionsForm({transactionsToggle,setTransactionsToggle}) {
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
    let newValue = value;
    if (name === "amount") {
      // Parse the amount value to a float
      newValue = parseFloat(value);
    }
    setTransaction(prevTransaction => ({
      ...prevTransaction,
      [name]: newValue,
      transactionType: name === "amount" ? getTransactionType(newValue) : prevTransaction.transactionType
    }));
  }
  
  // Function to determine transaction type based on amount
  function getTransactionType(amount) {
    if (amount > 0) {
      return "Addition";
    } else if (amount < 0) {
      return "Deduction";
    } else {
      return "Neutral";
    }
  }


  function handleSubmit(e) {
    e.preventDefault();

    const options = {
      headers: { "Content-Type": "application/json" },
    };

    if (id) {
      // Handle edit
      axios.put(`http://localhost:8889/api/transactions/${id}`, transaction, options)
        .then((res) => {
          setTransactionsToggle(!transactionsToggle);
          navigate("/");
        })
        .catch((error) => {
          console.error("Error updating transaction:", error);
        });
    }else{
      // Handle create  
      axios.post("http://localhost:8889/api/transactions", transaction, options)
        .then((res) => {
          setTransactionsToggle(!transactionsToggle);
          navigate("/");
        })
        .catch((error) => {
          console.error("Error adding transaction:", error);
        });
    }
  }

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8889/api/transactions/${id}`)
        .then((response) => {
          setTransaction(response.data.transaction);
        })
        .catch((error) => {
          console.error('Error fetching transaction details:', error);
        });
    }else{
      setTransaction({
        item_name: "",
        amount: 0,
        date: "",
        from: "",
        category: "",
        transactionType: ""
      })
    }
  }, [id]);

  return (
    <div>
      <div className="TransactionFormHeaderContainer">
        <h1 className="TransactionFormHeader">{id ? "Edit Transaction" : "Create new Transaction"}</h1>
      </div>
      <form onSubmit={handleSubmit} className="TransactionsForm">
        Transaction Name: 
        <label htmlFor="item_name">
          <input
            onChange={handleChange}
            type="text"
            id="item_name"
            name="item_name"
            value={transaction.item_name}
            required
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
            required
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
            required
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
            required
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
              required
          />
        </label><br />
        <br /><button className = "submit"type="submit">Submit</button><br />
      <button className='cancel' onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  )
}

export default TransactionsForm