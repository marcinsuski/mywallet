import React, { Fragment, useContext, useEffect, useState } from "react";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import ExpensesTotal from "./components/ExpensesTotal";
import ExpenseList from "./components/ExpenseList";
import { AppContext } from "./context/AppContext";
import classes from "./App.module.css";
import "./components/Balance.css";
import IncomeList from "./components/IncomeList";
import Income from "./components/Income";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const App = () => {
    // prettier-ignore
    const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

    let date = monthNames[new Date().getMonth()];
    const [showExpenses, setShowExpenses] = useState(true);
    const [search, setSearch] = useState("");
    const [month, setMonth] = useState(date);
    const [monthlyIncome, setMonthlyIncome] = useState(0);
    const [monthlyExpenses, setMonthlyExpenses] = useState(0);
    const [monthlyBalance, setMonthlyBalance] = useState('');
    const [activeExp, setActiveExp] = useState(true);
    const [activeInc, setActiveInc] = useState(false);
    const [currentItems, setCurrentItems] = useState([]);
    const [currentIncomeItems, setCurrentIncomeItems] = useState([]);

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

    useEffect(() => {
        localStorage.setItem("month", JSON.stringify(month) || date);
    }, [month, date]);

    const showIncomeHandler = () => {
        setActiveInc(true);
        setActiveExp(false);
        setShowExpenses(false);
    };
    const showExpensesHandler = () => {
        setActiveExp(true);
        setActiveInc(false);
        setShowExpenses(true);
    };

    useEffect(() => {
        let currentExpenses = expenses.filter((item) =>
            item.month === month.toLowerCase() ? item : null
        );
        setCurrentItems(currentExpenses);
        // console.log(currentExpenses)
        console.log(month);
    }, [month, expenses]);

    useEffect(() => {
        let currentIncome = income.filter((item) =>
            item.month === month.toLowerCase() ? item : null
        );
        setCurrentIncomeItems(currentIncome);
    }, [month, income]);

    useEffect(() => {
        
        setMonthlyIncome(
            income
                .map((item) =>
                    item.month === month.toLowerCase() ? item.amount : 0
                )
                .reduce((prev, next) => prev + next, 0)
        );

        setMonthlyExpenses(
            expenses
                .map((item) =>
                    item.month === month.toLowerCase() ? item.amount : 0
                )
                .reduce((prev, next) => prev + next, 0)
        );

        setMonthlyBalance(monthlyIncome - monthlyExpenses);
    }, [month, expenses, income]);

    let isPositive = monthlyExpenses > monthlyIncome ? "negative" : "positive";

    return (
        <Fragment>
            <Box className={classes.header}>
                <h1 style={{ margin: "1rem 0", fontSize: "3rem" }}>
                    My Wallet
                </h1>
                <Box className={classes.header__summary}>
                    <div className={classes.header__summary_item}>
                        <SavingsOutlinedIcon
                            fontSize="large"
                            style={{ marginBottom: "10px" }}
                        />
                        Income:
                        <span className={classes.badge}>
                            {" "}
                            {monthlyIncome} zł
                        </span>
                    </div>
                    <div className={classes.header__summary_item}>
                        <AccountBalanceWalletOutlinedIcon
                            fontSize="large"
                            style={{ marginBottom: "10px" }}
                        />
                        Balance:
                        <span className={`${isPositive}`}>
                            {monthlyIncome - monthlyExpenses} zł
                        </span>
                    </div>
                    <div className={classes.header__summary_item}>
                        <StorefrontOutlinedIcon
                            fontSize="large"
                            style={{ marginBottom: "10px" }}
                        />
                        Expenses{" "}
                        <span className={classes.badge}>
                            {" "}
                            {monthlyExpenses} zł
                        </span>
                    </div>
                </Box>
            </Box>
            <Box className={classes.header1}></Box>
            <Box className={classes.header2}></Box>
            <Box>
                <Box className={classes.container}>
                    {/* summaries */}
                    <Box className={classes.summaryWrapper}>
                        {/* <Budget /> */}
                        <Income
                            monthlyIncome={monthlyIncome}
                            currentIncomeItems={currentIncomeItems}
                        />
                        {/* <Balance
                            monthlyIncome={monthlyIncome}
                            monthlyExpenses={monthlyExpenses}
                            currentItems={currentItems}
                        /> */}
                        <ExpensesTotal
                            monthlyExpenses={monthlyExpenses}
                            currentItems={currentItems}
                        />
                    </Box>
                </Box>
                {/* expenses */}
                <Box className={classes.toolbar}>
                    <Box className={classes.toolbar__items}>
                        {/* search */}
                        <TextField
                            variant="outlined"
                            label="Search for name/category"
                            style={{ width: "11rem" }}
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
                                value={month.toLowerCase()}
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

                <Box className={classes.table__header}>
                    <Box>
                        <button
                            className={classes.table__button}
                            type="submit"
                            onClick={showIncomeHandler}
                            style={{
                                backgroundColor: activeInc ? "#0022a8" : "",
                                color: activeInc ? "white" : "",
                            }}
                        >
                            Income
                        </button>
                    </Box>
                    <Box>
                        <button
                            className={classes.table__button}
                            type="submit"
                            onClick={showExpensesHandler}
                            style={{
                                backgroundColor: activeExp ? "#0022a8" : "",
                                color: activeExp ? "white" : "",
                            }}
                        >
                            Expenses
                        </button>
                    </Box>
                </Box>
                <Box>
                    {showExpenses && (
                        <ExpenseList
                            handleSearchExpenses={handleSearchExpenses}
                        />
                    )}
                    {!showExpenses && (
                        <IncomeList handleSearchIncome={handleSearchIncome} />
                    )}
                </Box>
            </Box>
        </Fragment>
    );
};

export default App;
