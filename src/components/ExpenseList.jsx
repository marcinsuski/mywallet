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

const ExpenseList = ({handleSearchExpenses }) => {
    
    return (
        <TableContainer
            style={{
                border: "none",
                // borderRadius: "5px",
            }}
        >
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {["Name", "Category", "Month", "Amount", " "].map(
                            (head) => (
                                <TableCell
                                    style={{ fontWeight: "bold", padding: '0.5rem' }}
                                    key={head}
                                    align={head === "Amount" ? "right" : "left"}
                                >
                                    {head}
                                </TableCell>
                            )
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
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
