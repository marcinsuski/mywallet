import React, { useContext, useEffect, useState } from "react";
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import ExpensesTotal from "./components/ExpensesTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { AppContext } from "./context/AppContext";
import classes from "./App.module.css";
import AddIncomeForm from "./components/AddIncomeForm";
import IncomeList from "./components/IncomeList";
import Income from "./components/Income";
import Balance from "./components/Balance";

const App = () => {
    // prettier-ignore
    const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

    let date = monthNames[new Date().getMonth()];
    const [showExpenses, setShowExpenses] = useState(true);
    const [search, setSearch] = useState("");
    const [month, setMonth] = useState(date);
    const { expenses, income } = useContext(AppContext);
    const [monthlyIncome, setMonthlyIncome] = useState(0);
    const [monthlyExpenses, setMonthlyExpenses] = useState(0);
    const [monthlyBalance, setMonthlyBalance] = useState(0);

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

    useEffect(() => {
        localStorage.setItem("month", JSON.stringify(month) || date);
    }, [month, date]);

    const showIncomeHandler = () => {
        setShowExpenses(false);
    };
    const showExpensesHandler = () => {
        setShowExpenses(true);
    };

    useEffect(() => {
        setMonthlyIncome(
            income
                .map((item) =>
                    item.month === month.toLowerCase() ? item.amount : 0
                )
                .reduce((prev, next) => prev + next)
        );

        setMonthlyExpenses(
            expenses
                .map((item) =>
                    item.month === month.toLowerCase() ? item.amount : 0
                )
                .reduce((prev, next) => prev + next)
        );

        setMonthlyBalance(monthlyIncome - monthlyExpenses);
    }, [month]);



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
                        <Income monthlyIncome={monthlyIncome} />
                        <Balance  monthlyIncome={monthlyIncome} monthlyExpenses={monthlyExpenses}/>
                        <ExpensesTotal monthlyExpenses={monthlyExpenses} />
                    </Box>
                </Box>
                {/* expenses */}
                <Box className={classes.toolbar}>
                    <Box className={classes.toolbar__items}>
                        {/* search */}
                        <TextField
                            variant="outlined"
                            label="Search for name or category"
                            style={{ width: "14rem" }}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        {/* Choose Month */}
                        <FormControl>
                            <InputLabel id="month">Month</InputLabel>
                            <Select
                                required
                                id="month"
                                label="month"
                                variant="outlined"
                                value={month}
                                defaultValue={month}
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
                                <MenuItem value={"september"}>
                                    september
                                </MenuItem>
                                <MenuItem value={"october"}>october</MenuItem>
                                <MenuItem value={"november"}>november</MenuItem>
                                <MenuItem value={"december"}>december</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
                <Box>
                    <h3 style={{ margin: "2rem 0", fontSize: "2rem" }}>
                        Expenses
                    </h3>
                </Box>
                <Box>
                    <Box
                        sx={{
                            display: "flex",
                            width: "100%",
                            justifyContent: "space-between",
                            margin: "0.5rem 0",
                        }}
                    >
                        <Button
                            type="submit"
                            sx={{
                                ":hover": {
                                    backgroundColor: "transparent",
                                    color: "black",
                                },
                                fontWeight: "bold",
                                width: "6rem",
                                padding: "0.7rem 0.5rem",
                                margin: "0 1rem",
                            }}
                            variant="text"
                            onClick={showIncomeHandler}
                        >
                            Income
                        </Button>
                        <Button
                            type="submit"
                            sx={{
                                ":hover": {
                                    backgroundColor: "transparent",
                                    color: "black",
                                },
                                fontWeight: "bold",
                                width: "6rem",
                                padding: "0.7rem 0.5rem",
                                margin: "0 1rem",
                            }}
                            variant="text"
                            onClick={showExpensesHandler}
                        >
                            Expenses
                        </Button>
                    </Box>
                    {showExpenses && (
                        <ExpenseList
                            handleSearchExpenses={handleSearchExpenses}
                        />
                    )}
                    {!showExpenses && (
                        <IncomeList handleSearchIncome={handleSearchIncome} />
                    )}
                </Box>

                <Box>{/* <AddExpenseForm /> */}</Box>
                <Box>{/* <AddIncomeForm /> */}</Box>
            </Box>
        </>
    );
};

export default App;
