import { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import "./Transactions.css"


function Transactions({ transactions }) {
  const navigate = useNavigate();

  function handleTransactionClick(id) {
    navigate(`/${id}`);
  }
  
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
    // Function to determine CSS class based on bank account total
    function determineBankTotalClass(total) {
      if (total > 100) {
        return 'Green';
      } else if (total >= 0) {
        return 'Yellow';
      } else {
        return 'Red';
      }
    }
  
  if (transactions.length === 0) return null;

  return (
    <div className="Transactions-Wrapper">
      <h1>Transactions</h1>
      <h2 className={`BankTotal`}>
        Account bank Total: <span className={`${determineBankTotalClass(calculateBankTotal(transactions))}`}>${calculateBankTotal(transactions)}</span>
      </h2>
      {transactions.map(({ id, item_name, amount, date, from, category, transactionType }) => (
        <div key={id} className= {`Transaction ${transactionType}`}  onClick={() => handleTransactionClick(id)}>
          <div className="TransactionsDetails">
          <h3>{formatDateToMonthDay(date)}</h3>
          <h3>{item_name}</h3>
          <h3>{amount}</h3>
          </div>
          <Link to={`/${id}`} className="DetailsButton Link">
            <button className="DetailsButton">Details</button>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Transactions