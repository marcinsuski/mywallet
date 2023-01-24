import React, { useContext } from 'react'
import classes from '../App.module.css'
import {AppContext } from '../context/AppContext';

const Budget = () => {
  const {budget} = useContext(AppContext);
 
  return (
    <div className={classes.summary} style={{backgroundColor: '#E2E2E2'}}>
      <span>Budget: {budget} zł</span>
      </div>
  )
}

export default Budget