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
  return (
    <div>
      <h1>TransactionsForm</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item_name">

        </label>
        <label htmlFor="amount">

        </label>
        <label htmlFor="date">

        </label>
        <label htmlFor="from">

        </label>
        <label htmlFor="category">

        </label>
        <br /><button type="submit">Submit</button><br />
      </form>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  )
}

export default TransactionsForm