import React from 'react'
import classes from '../App.module.css'

const ExpensesTotal = () => {
  return (
    <div className={classes.summary} style={{backgroundColor: '#AEE2F2', color: '#023B4E'}}>
          <span>Spent so far: $960</span>
    </div>
  )
}

export default ExpensesTotal