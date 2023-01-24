import { Box } from "@mui/system";
import React, { useContext } from "react";
import './Remaining.css';
import { AppContext } from "../context/AppContext";

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.amount);
    }, 0);

    const isPositive = totalExpenses > budget ? 'negative' : 'positive';

    return (
        <Box className={`summary ${isPositive}`}>
            <span>Remaining: {budget - totalExpenses} zł</span>
        </Box>
    );
};

export default Remaining;
