import { Button, FormControl, InputLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import classes from "./AddExpenseForm.module.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { AppContext } from "../context/AppContext";
import {v4 as uuidv4} from 'uuid';

const AddIncomeForm = () => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [month, setMonth] = useState('');
    const {dispatch, income} = useContext(AppContext);
    



    const onSubmit = (e) => {
        e.preventDefault();
        const income = {
            id: uuidv4(),
            name,
            amount: parseInt(amount),
            category,
            month,
        };

        dispatch({
            type: 'ADD_INCOME',
            payload: income,
        })

    }

    useEffect(() => {
        localStorage.setItem('income', JSON.stringify(income));
      }, [income]);

    return (
        <Box component="form" onSubmit={onSubmit} className={classes.form}>
            <TextField
                required
                id="name"
                label="Name"
                value={name}
                variant="outlined"
                sx={{ width: "8.5rem" }}
                onChange={(e) => {setName(e.target.value)}}
            />
            <TextField
                required
                id="amount"
                label="Amount"
                variant="outlined"
                sx={{ width: "8.5rem" }}
                value={amount}
                onChange={(e) => {setAmount(e.target.value)}}
            />
            <FormControl >
                <InputLabel id="category">Category</InputLabel>
                <Select
                    required
                    id="category"
                    label="category"
                    variant="outlined"
                    defaultValue={category}
                    sx={{ width: "8.5rem" }}
                    value={category}
                    onChange={(e) => {setCategory(e.target.value)}}
                >
                    <MenuItem value={"Job"}>Job</MenuItem>
                    <MenuItem value={"freelance"}>Freelance</MenuItem>
                    <MenuItem value={"investment"}>Investment</MenuItem>
                    <MenuItem value={"gifts"}>Gifts</MenuItem>
                    <MenuItem value={"legal"}>Legal</MenuItem>
                    <MenuItem value={"other_1"}>Other 1</MenuItem>
                    <MenuItem value={"other_2"}>Other 2</MenuItem>
                </Select>
            </FormControl>
            <FormControl>
            <InputLabel id="month">Month</InputLabel>
            <Select
                required
                id="month"
                label="month"
                defaultValue={"january"}
                variant="outlined"
                sx={{ width: "8.5rem" }}
                value={month}
                onChange={(e) => {setMonth(e.target.value)}}
            >
                <MenuItem value={"january"}>january</MenuItem>
                <MenuItem value={"february"}>february</MenuItem>
                <MenuItem value={"march"}>march</MenuItem>
                <MenuItem value={"april"}>april</MenuItem>
                <MenuItem value={"may"}>may</MenuItem>
                <MenuItem value={"june"}>june</MenuItem>
                <MenuItem value={"july"}>july</MenuItem>
                <MenuItem value={"august"}>august</MenuItem>
                <MenuItem value={"september"}>september</MenuItem>
                <MenuItem value={"october"}>october</MenuItem>
                <MenuItem value={"november"}>november</MenuItem>
                <MenuItem value={"december"}>december</MenuItem>
            </Select>
        </FormControl>

            <Button
                type="submit"
                sx={{
                    fontWeight: "bold",
                    width: "6rem",
                    padding: "0.7rem 0.5rem",
                    backgroundColor: "#264ede",
                }}
                variant="contained"
            >
                Save
            </Button>
        </Box>
    );
};

export default AddIncomeForm;
