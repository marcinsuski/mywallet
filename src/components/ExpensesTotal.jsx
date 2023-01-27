import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import classes from "../App.module.css";
import { AppContext } from "../context/AppContext";

const ExpensesTotal = () => {
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.amount);
    }, 0);
    return (
        <div
            className={classes.summary}
            style={{ backgroundColor: "#AEE2F2", color: "#023B4E" }}
        >
            <Box className={classes.budgetBox}>
                <span>Expenses: {totalExpenses} zł</span>
                {/* Add Expenses */}
                <Button
                    sx={{
                        ":hover": {
                            bgcolor: "#E30000",
                            color: "white",
                        },
                        fontWeight: "bold",
                        // width: "10rem",
                        // padding: "0.7rem 0.5rem",
                        backgroundColor: "#FF0000",
                    }}
                    variant="contained"
                >
                    Add expense
                </Button>
            </Box>
        </div>
    );
};

export default ExpensesTotal;
