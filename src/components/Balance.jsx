import { Box } from "@mui/system";
import React, { useContext } from "react";
import './Balance.css';
import { AppContext } from "../context/AppContext";

const Remaining = () => {
    const { expenses, income } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.amount);
    }, 0);

    const totalIncome = income.reduce((total, item) => {
        return (total += item.amount)
      }, 0)

    const isPositive = totalExpenses > totalIncome ? 'negative' : 'positive';

    return (
        <Box className={`summary ${isPositive}`}>
            <span>Balance: {totalIncome - totalExpenses} zł</span>
        </Box>
    );
};

export default Remaining;
