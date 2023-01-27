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
                    {/* Add income */}
                    <Button
                            sx={{
                                ':hover': {
                                    bgcolor: '#18AA00', 
                                    color: 'white',
                                  },
                                fontWeight: "bold",
                                // width: "10rem",
                                // padding: "0.7rem 0.5rem",
                                backgroundColor: "#1CCA00",
                            }}
                            variant="contained"
                        >
                            Add income
                        </Button>
            </Box>
        </div>
    );
};

export default Budget;
