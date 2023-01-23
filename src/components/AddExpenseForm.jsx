import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import classes from './AddExpenseForm.module.css'


const AddExpenseForm = () => {
    return (
        <Box component="form" className={classes.form}>
            <TextField
                required
                id="name"
                label="Name"
                variant="outlined"
                sx={{width: '21rem'}}
            />
            <TextField
              required
                id="amount"
                label="Amount"
                variant="outlined"
                sx={{width: '21rem'}}
            />
            <Button type="submit" sx={{fontWeight: 'bold', width: '6rem', padding: '0.7rem 0.5rem', backgroundColor: "#264ede"}} variant="contained">Save</Button>
        </Box>
    );
};

export default AddExpenseForm;
