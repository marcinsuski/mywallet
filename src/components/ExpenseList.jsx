import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <TableContainer  style={{
            border: "1px solid rgb(207, 207, 207)",
            borderRadius: "5px",
            
        }}>
            <Table aria-label="simple table" style={{ }}>
                <TableHead >
                    <TableRow>
                        {["Name", "Category", "Month", "Amount", " "].map(
                            (head) => (
                                <TableCell
                                style={{fontWeight: 'bold'}}
                                    key={head}
                                    align={
                                        head === "Amount" ? "right" : ""
                                    }
                                >
                                    {head}
                                </TableCell>
                            )
                        )}
                    </TableRow>
                </TableHead>
                <TableBody  >
                    {expenses.map((expense) => {
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
