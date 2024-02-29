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
    </div>
  )
}

export default TransactionsForm