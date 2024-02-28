import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';

function TransactionDetails() {
  const {id} = useParams();
  console.log("ID:", id);
  const [transaction, setTransaction] = useState(null);

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

  function formatDateToMonthDayYear(dateString) {
    const date = new Date(dateString);
    const month = date.toLocaleString('en-US', { month: 'short' });
    const day = date.getDate();
    const year = date.getFullYear(); 
    return `${month} ${day}, ${year}`; 
  }

  if (!transaction) return null;

  return (
    <div className="Transaction-Detail-Wrapper">
      <h1>Transaction Details</h1>
      <p>ID: {transaction.id}</p>
      <p>Item Name: {transaction.item_name}</p>
      <p>Amount: {transaction.amount}</p>
      <p>Transaction Type: {transaction.transactionType}</p>
      <p>Date: {formatDateToMonthDayYear(transaction.date)}</p>
      <Link to="/">Go back to transactions list</Link>
    </div>
  )
}

export default TransactionDetails