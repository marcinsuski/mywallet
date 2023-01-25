import React, { useContext, useState } from "react";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpensesTotal from "./components/ExpensesTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { AppContext } from "./context/AppContext";
import classes from "./App.module.css";
import AddIncomeForm from "./components/AddIncome";
import IncomeList from "./components/IncomeList";
import Income from './components/Income'

const App = () => {
    const [search, setSearch] = useState("");
    const [month, setMonth] = useState("");
    const { expenses, income } = useContext(AppContext);

    const handleSearchExpenses = () => {
        return expenses.filter(
            (expense) =>
                expense.name.toLowerCase().includes(search) ||
                expense.category.toLowerCase().includes(search) ||
                expense.month.toLowerCase().includes(search)
        );
    };

    
    const handleSearchIncome = () => {
        return income.filter(
            (income) =>
            income.name.toLowerCase().includes(search) ||
            income.category.toLowerCase().includes(search) ||
            income.month.toLowerCase().includes(search)
        );
    };

    return (
        <>
            <Box>
                <Box className={classes.container}>
                    <h1 style={{ margin: "1rem 0", fontSize: "3rem" }}>
                        My Wallet
                    </h1>

                    {/* summaries */}
                    <Box className={classes.summaryWrapper}>
                        {/* <Budget /> */}
                        <Income />
                        <Remaining />
                        <ExpensesTotal />
                    </Box>
                </Box>
                {/* expenses */}
                <Box className={classes.expenses}>
                    <h3 style={{ margin: "2rem 0", fontSize: "2rem" }}>
                        Expenses
                    </h3>
                    {/* Choose Month */}
                    <FormControl>
                        <InputLabel id="month">Month</InputLabel>
                        <Select
                            required
                            id="month"
                            label="month"
                            defaultValue={"january"}
                            variant="outlined"
                            sx={{ width: "8.5rem" }}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setMonth(e.target.value);
                            }}
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
                </Box>
                {/* search */}
                <Box className={classes.search}>
                    <TextField
                        variant="outlined"
                        label="Search for name or category"
                        style={{ width: "23rem" }}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Box>
                <Box>
                    <ExpenseList handleSearchExpenses={handleSearchExpenses} />
                </Box>
                <Box>
                    <IncomeList handleSearchIncome={handleSearchIncome} />
                </Box>
                {/* Add expenses */}
                <h3 style={{ margin: "2rem 0", fontSize: "2rem" }}>
                    Add Expense
                </h3>

                <Box>
                    <AddExpenseForm />
                </Box>
                {/* Add Income */}
                <Box>
                    <h3 style={{ margin: "2rem 0", fontSize: "2rem" }}>
                        Add Income
                    </h3>
                    <AddIncomeForm />
                </Box>
            </Box>
        </>
    );
};

export default App;
