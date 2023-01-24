import { Box } from "@mui/system";
import React from "react";
import classes from "./App.module.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpensesTotal from "./components/ExpensesTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { AppProvider } from "./context/AppContext";
import { FormControl } from "@mui/material";
import SelectMonth from "./components/SelectMonth";

const App = () => {
    return (
        <AppProvider>
            <Box>
                <Box className={classes.container}>
                    <h1 style={{ margin: "1rem 0", fontSize: "3rem" }}>
                        My Wallet
                    </h1>

                    {/* summaries */}
                    <Box className={classes.summaryWrapper}>
                        <Budget />
                        <Remaining />
                        <ExpensesTotal />
                    </Box>
                </Box>
                {/* expenses */}
                <Box className={classes.expenses}>
                <h3 style={{ margin: "2rem 0", fontSize: "2rem" }}>Expenses</h3>
                <SelectMonth />
                </Box>

                <Box>
                    <ExpenseList />
                </Box>
                {/* Add expenses */}
                <h3 style={{ margin: "2rem 0", fontSize: "2rem" }}>
                    Add Expense
                </h3>

                <Box>
                    <AddExpenseForm />
                </Box>
            </Box>
        </AppProvider>
    );
};

export default App;
