import React from "react";
import classes from "./ExpenseItem.module.css";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Box } from "@mui/system";

const ExpenseItem = ({ id, name, category, amount }) => {
    return (
        <li className={classes.expenseItem}>
            <Box style={{ minWidth: '30%'}}>{name}</Box>
            <Box style={{ minWidth: '30%'}}>{category}</Box>
            <Box style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
                <Box className={classes.badge}>{amount} zł</Box>

                <DeleteForeverOutlinedIcon color="pink"  style={{marginRight: '0.5rem'}}/>
            </Box>
        </li>
    );
};

export default ExpenseItem;
