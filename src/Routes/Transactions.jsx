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
      <h1>Transactions</h1>
      {transaction.map(({ id, item_name, amount, date, from, category,transactionType }) => (
        <div key={id}>
          <h3>{date}</h3>
          <h3>{item_name}</h3>
          <h2>{amount}</h2>
          <Link to= {`/${id}`}>
            <button>Details</button>
          </Link>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Transactions