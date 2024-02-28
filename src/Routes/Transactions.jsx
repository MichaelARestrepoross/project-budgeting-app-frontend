import { Link } from "react-router-dom" 

function Transactions( transaction, setTransactions ) {
  if (transaction.length === 0) return null;

  function handleDelete(id) {
    const options = {
      method: "DELETE",
    };

    fetch(`http://localhost:8889/api/transactions/${id}`, options)
      .then((res) => res.json())
      .then((data) => setTransactions(data.logs));
  }

  return (
    <div>
      Transactions
    </div>
  )
}

export default Transactions