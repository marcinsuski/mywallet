import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import classes from "../App.module.css";
import { AppContext } from "../context/AppContext";
import AddIncomeForm from "./AddIncomeForm";

const Budget = ({monthlyIncome}) => {
    const { income } = useContext(AppContext);
    const [showModal, setShowModal] = useState(false);
  
    const showModalHandler = () => {
        setShowModal(!showModal);
    };

    useEffect(() => {
        localStorage.setItem("income", JSON.stringify(income));
    }, [income]);



    return (
        <div className={classes.summary} style={{ backgroundColor: "#E2E2E2" }}>
            <Box className={classes.budgetBox}>
                <Box>
                    <span>Income: {monthlyIncome} zł</span>
           
                </Box>
                {/* Add income */}
                <Button
                    sx={{
                        ":hover": {
                            bgcolor: "#18AA00",
                            color: "white",
                        },
                        fontWeight: "bold",
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
