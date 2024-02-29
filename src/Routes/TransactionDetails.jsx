import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function TransactionDetails({transactions,setTransactions ,transactionsToggle ,setTransactionsToggle}) {
  const {id} = useParams();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState(null);

  
  function formatDateToMonthDayYear(dateString) {
      const date = new Date(dateString);
      const month = date.toLocaleString('en-US', { month: 'short' });
      const day = date.getDate();
      const year = date.getFullYear(); 
      return `${month} ${day}, ${year}`; 
    }
  function handleDelete(id) {
    axios.delete(`http://localhost:8889/api/transactions/${id}`)
      .then((res) => {
        setTransactions(transactions.filter(transaction => transaction.id !== id));
        setTransactionsToggle(!transactionsToggle)
        navigate('/')
      })
      .catch((error) => {
        console.error("Error deleting transaction:", error);
      });
  }
    useEffect(() => {
      axios.get(`http://localhost:8889/api/transactions/${id}`)
        .then((response) => {
          console.log("Response data:", response.data);
          setTransaction(response.data.transaction);
        })
        .catch((error) => {
          console.error('Error fetching transaction details:', error);
        });
    }, [id]);

  if (!transaction) return null;

  return (
    <div className="Transaction-Detail-Wrapper">
      <h1>Transaction Details</h1>
      <p>ID: {transaction.id}</p>
      <p>Item Name: {transaction.item_name}</p>
      <p>Amount: {transaction.amount}</p>
      <p>Transaction Type: {transaction.transactionType}</p>
      <p>Date: {formatDateToMonthDayYear(transaction.date)}</p>
      <Link to="/"><button>Go back to transactions list</button></Link>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  )
}

export default TransactionDetails