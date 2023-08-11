import React from 'react';
import ExpenseList from './components/Expenses/ExpenseList';
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  const expenses = [
    {
      title: '바나나',
      price: 2000,
      date: new Date(2023, 3-1, 23)
    },
    {
      title: 'BBQ치킨',
      price: 20000,
      date: new Date(2023, 5-1, 21)
    },
    {
      title: '도미노피자',
      price: 35000,
      date: new Date(2023, 7-1, 14)
    },
  ];

  console.log('App실행!!');

  return (
    <>
      <NewExpense />
      <ExpenseList items ={expenses}/>
    </>
  )
}

export default App;
