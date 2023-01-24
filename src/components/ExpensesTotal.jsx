import React, { useContext } from 'react'
import classes from '../App.module.css'
import { AppContext } from '../context/AppContext';

const ExpensesTotal = () => {
  const { expenses } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.amount)
  }, 0)
  return (
    <div className={classes.summary} style={{backgroundColor: '#AEE2F2', color: '#023B4E'}}>
          <span>Spent so far: {totalExpenses} zł</span>
    </div>
  )
}

export default ExpensesTotal