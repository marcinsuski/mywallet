import { Box, Button } from "@mui/material";
import React from "react";
import classes from '../App.module.css'

const ViewBudget = ({ budget, handleEditClick }) => {
    return (
        <Box className={classes.budgetBox}>
            <Box>
            <span>Budget: {budget} zł</span>

            </Box>
            <Button
                onClick={handleEditClick}
                sx={{
                    fontWeight: "bold",
                    width: "6rem",
                    padding: "0.7rem 0.5rem",
                    backgroundColor: "#264ede",
                }}
                variant="contained"
            >
                Edit
            </Button>
        </Box>
    );
};

export default ViewBudget;
