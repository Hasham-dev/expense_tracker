import React from 'react';
import './App.css';
import Header from './Header';
import Balance from './Balance';
import Expense from './Expense';
import History from './History';
import Transaction from './trans';
import {TransactionProvider} from './TrasnContext';

function App() {
  
  return(
    <TransactionProvider>
    <div className = "container" >
      <Header />
      <Balance />
      <Expense />
      <History />
      <Transaction />
    </div >
    </TransactionProvider>
  );
}

export default App;
