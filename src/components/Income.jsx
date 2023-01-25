import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import classes from "../App.module.css";
import { AppContext } from "../context/AppContext";

const Budget = () => {
    const { income, dispatch } = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false);

    const totalIncome = income.reduce((total, item) => {
        return (total += item.amount)
      }, 0)
    return (
        <div className={classes.summary} style={{ backgroundColor: "#E2E2E2" }}>
            <Box className={classes.budgetBox}>
                <Box>
                    <span>Income: {totalIncome} zł</span>
                </Box>
                {/* <Button
                    sx={{
                        fontWeight: "bold",
                        width: "6rem",
                        padding: "0.7rem 0.5rem",
                        backgroundColor: "#264ede",
                    }}
                    variant="contained"
                >
                    Edit
                </Button> */}
            </Box>
        </div>
    );
};

export default Budget;
