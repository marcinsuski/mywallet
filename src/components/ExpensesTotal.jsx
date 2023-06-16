import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import classes from "../App.module.css";
import DoughnutChart from "../charts/DoughnutExpenses";
import { AppContext } from "../context/AppContext.jsx";
import AddExpenseForm from "./AddExpenseForm";

const ExpensesTotal = ({ monthlyExpenses, currentItems }) => {
    const { expenses, month } = useContext(AppContext);
    const [showModal, setShowModal] = useState(false);

    const showModalHandler = () => {
        setShowModal(!showModal);
    };

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses, month]);

    return (
        <>
            <div
                className={classes.summary}
                style={{
                    backgroundColor: "#ffffff",
                    padding: "1rem",
                    flexDirection: "column",
                    height: "max-content",
                    color: "#023B4E",
                }}
            >
                <DoughnutChart currentItems={currentItems} />
                <div className={classes.expenses__box_title}>
                    <div style={{ fontSize: "1rem" }}>Expenses:</div>{" "}
                    <span style={{ fontWeight: "bold" }}>
                        {monthlyExpenses}
                    </span>{" "}
                    zł
                </div>
                <button
                    className={classes.add__btn + " " + classes.red}
                    onClick={showModalHandler}
                ></button>
            </div>
            <Box>
                {showModal && (
                    <AddExpenseForm showModalHandler={showModalHandler} />
                )}
            </Box>
        </>
    );
};

export default ExpensesTotal;
