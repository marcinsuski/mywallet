import React, { useContext } from "react";
import classes from "./ExpenseItem.module.css";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

import { AppContext } from "../context/AppContext";
import { Icon, TableCell, TableRow } from "@mui/material";

const ExpenseItem = ({ id, name, category, amount, month }) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: "DELETE_EXPENSE",
            payload: id,
        });
    };

    return (
        <TableRow   >
            <TableCell style={{ padding: '0 1rem'}}>{name}</TableCell>
            <TableCell style={{  padding: '0 1rem'}}>{category}</TableCell>
            <TableCell style={{ padding: '0 1rem'  }}>{month}</TableCell>
            <TableCell
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                }}
            >
                <TableCell style={{ padding: '0 0 0 1rem'  }} className={classes.badge}>{amount} zł</TableCell>
            </TableCell>
            <TableCell style={{ width: '50px',  padding: '0 1rem 0 0' }}>
                <Icon
                    component="button"
                    style={{
                        marginRight: "0.5rem",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    <DeleteForeverOutlinedIcon onClick={handleDeleteExpense} />
                </Icon>
            </TableCell>
        </TableRow>
    );
};

export default ExpenseItem;
