import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import classes from "../App.module.css";
import { AppContext } from "../context/AppContext";
import AddIncomeForm from "./AddIncomeForm";

const Budget = () => {
    const { income, dispatch, month } = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false);
    const [showModal, setShowModal] = useState(false);


    const totalIncome = income.reduce((total, item) => {
        return (total += item.amount);
    }, 0);

    const showModalHandler = () => {
        setShowModal(!showModal);
    };

    return (
        <div className={classes.summary} style={{ backgroundColor: "#E2E2E2" }}>
            <Box className={classes.budgetBox}>
                <Box>
                    <span>Income: {totalIncome} zł</span>
                    {/* 
                    {handleSearchExpenses().map((expense) => {
                        return (
                            <ExpenseItem
                                key={expense.id}
                                id={expense.id}
                                name={expense.name}
                                amount={expense.amount}
                                category={expense.category}
                                month={expense.month}
                            />
                        );
                    })} */}
                </Box>
                {/* Add income */}
                <Button
                    sx={{
                        ":hover": {
                            bgcolor: "#18AA00",
                            color: "white",
                        },
                        fontWeight: "bold",
                        // width: "10rem",
                        // padding: "0.7rem 0.5rem",
                        backgroundColor: "#1CCA00",
                    }}
                    variant="contained"
                    onClick={showModalHandler}
                >
                    Add income
                </Button>
            </Box>

            <Box>
                {showModal && (
                    <AddIncomeForm showModalHandler={showModalHandler} />
                )}
            </Box>
        </div>
    );
};

export default Budget;
