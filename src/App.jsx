import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from 'axios';

//Components
import HeaderNav from "./BasicComponent/HeaderNav";
import Transactions from "./Routes/Transactions";
import TransactionDetails from "./Routes/TransactionDetails";
import TransactionsForm from "./Routes/TransactionsForm";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [transactionsToggle, setTransactionsToggle] = useState(false);
  

  useEffect(() => {
    axios.get("http://localhost:8889/api/transactions")
      .then((response) => {
        setTransactions(response.data.transactions);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [transactionsToggle]);

  return (
    <div className="App-Wrapper">
      <HeaderNav/>

      <Routes>
        {/* show all Transactions component */}
        <Route 
          path="/"
          element= {
            <Transactions
              transactions={transactions}
            />
          }
        />
        {/* details route */}
        <Route 
          path="/:id" 
          element = {
            <TransactionDetails 
              transactions = {transactions} 
              setTransactions ={setTransactions} 
              transactionsToggle = { transactionsToggle }
              setTransactionsToggle = {setTransactionsToggle}
            />
          }
        />
        {/* edit route */}
        <Route 
          path="/edit/:id" 
          element = {
            <TransactionsForm 
              transactions = {transactions}
              setTransactions = {setTransactions} 
              transactionsToggle = { transactionsToggle }
              setTransactionsToggle = {setTransactionsToggle}
            />
          }
        />
        {/* create new Transaction */}
        <Route 
          path="/new"           
          element = {
            <TransactionsForm 
              transactions = {transactions}
              setTransactions = {setTransactions} 
              transactionsToggle = { transactionsToggle }
              setTransactionsToggle = {setTransactionsToggle}
            />
          } 
        />
      </Routes>
    </div>
  );
}

export default App
