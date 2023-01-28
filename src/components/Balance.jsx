import { Box } from "@mui/system";
import React, { useContext } from "react";
import './Balance.css';
import { AppContext } from "../context/AppContext";

const Remaining = ({monthlyExpenses, monthlyIncome }) => {
    const { expenses, income } = useContext(AppContext);

    // const totalExpenses = expenses.reduce((total, item) => {
    //     return (total = total + item.amount);
    // }, 0);

    // const totalIncome = income.reduce((total, item) => {
    //     return (total += item.amount)
    //   }, 0)

    const isPositive = monthlyExpenses > monthlyIncome ? 'negative' : 'positive';

    return (
        <Box className={`summary ${isPositive}`} style={{    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
            <span>Balance: {monthlyIncome - monthlyExpenses} zł</span>
        </Box>
    );
};

export default Remaining;
