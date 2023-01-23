import React from 'react'
import classes from '../App.module.css'

const Remaining = () => {
  return (
    <div className={classes.summary} style={{backgroundColor: '#BFE5B2', color: '#25431A'}}>
       <span>Remaining: $1040</span>
    </div>
  )
}

export default Remaining