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

  useEffect(() => {
    axios.get("http://localhost:8889/api/transactions")
      .then((response) => {
        setTransactions(response.data.transactions);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <HeaderNav/>
      <h1>Transactions CRUD</h1>

      <Routes>
        {/* show all Transactions component */}
        <Route 
          path="/"
          element= {
            <Transactions
              transactions={transactions}
              setTransactions={setTransactions}
            />
          }
        />
        {/* details route */}
        <Route 
          path="/:id" 
          element = {<TransactionDetails />}
        />
        {/* edit route */}
        <Route 
          path="/edit/:id" 
          element = {
            <TransactionsForm 
              setTransactions = {setTransactions} 
            />
          }
        />
        {/* create new Transaction */}
        <Route 
          path="/new"           
          element = {
            <TransactionsForm 
            setTransactions = {setTransactions} 
            />
          } 
        />
      </Routes>
    </div>
  );
}

export default App
