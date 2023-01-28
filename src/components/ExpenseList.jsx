import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import React from "react";
import ExpenseItem from "./ExpenseItem";
import classes from '../App.module.css';

const ExpenseList = ({ handleSearchExpenses }) => {
    return (
        <TableContainer
            style={{
                borderRadius: "0 0 10px 10px",
                boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px'
            }}
        >
            <Table aria-label="simple table" style={{ borderRadius: "10px" }}>
                <TableHead>
                    <TableRow style={{ backgroundColor: "#baf99a" }}>
                        {["Name", "Category", "Month", "Amount", " "].map(
                            (head) => (
                                <TableCell
                                    style={{
                                        fontWeight: "bold",
                                        padding: "0.5rem",
                                    }}
                                    key={head}
                                    align={head === "Amount" ? "right" : "left"}
                                >
                                    {head}
                                </TableCell>
                            )
                        )}
                    </TableRow>
                </TableHead>
                <TableBody  className={classes.table__wrapper}>
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
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ExpenseList;
