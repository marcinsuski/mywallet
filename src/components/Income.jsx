import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import classes from "../App.module.css";
import DoughnutIncome from "../charts/DoughnutIncome";
import { AppContext } from "../context/AppContext";
import AddIncomeForm from "./AddIncomeForm";

const Budget = ({ monthlyIncome, currentIncomeItems }) => {
    const { income, month } = useContext(AppContext);
    const [showModal, setShowModal] = useState(false);

    const showModalHandler = () => {
        setShowModal(!showModal);
    };

    useEffect(() => {
        localStorage.setItem("income", JSON.stringify(income));
    }, [income, month]);

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
                <DoughnutIncome currentIncomeItems={currentIncomeItems} />
                <Box className={classes.budgetBox}>
                    <div className={classes.expenses__box_title}>
                        <div style={{ fontSize: "1rem" }}>Income:</div>{" "}
                        <span style={{ fontWeight: "bold" }}>
                            {monthlyIncome}
                        </span>{" "}
                        zł
                    </div>
                    <button
                        className={classes.add__btn}
                        onClick={showModalHandler}
                    ></button>
                </Box>
            </div>
            <Box>
                {showModal && (
                    <AddIncomeForm showModalHandler={showModalHandler} />
                )}
            </Box>
        </>
    );
};

export default Budget;
