import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import React from "react";
import IncomeItem from "./IncomeItem";

const IncomeList = ({handleSearchIncome }) => {
    
    return (
        <TableContainer
        style={{
            border: "none",
            // borderRadius: "5px",
        }}
        >
            <Table aria-label="simple table" style={{}}>
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
                    {handleSearchIncome().map((income) => {
                        return (
                            <IncomeItem
                                key={income.id}
                                id={income.id}
                                name={income.name}
                                amount={income.amount}
                                category={income.category}
                                month={income.month}
                            />
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default IncomeList;
