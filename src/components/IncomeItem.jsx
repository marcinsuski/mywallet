import React, { useContext } from "react";
import classes from "./IncomeItem.module.css";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { AppContext } from "../context/AppContext";
import { Icon, TableCell, TableRow } from "@mui/material";

const IncomeItem = ({ id, name, category, amount, month }) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteIncome = () => {
        dispatch({
            type: "DELETE_INCOME",
            payload: id,
        });
    };

    return (
        <TableRow>
            <TableCell style={{ padding: "0.5rem" }}>{name}</TableCell>
            <TableCell style={{ padding: "0.5rem" }}>{category}</TableCell>
            <TableCell style={{ padding: "0.5rem" }}>{month}</TableCell>
            <TableCell
                className={classes.badge}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    padding: "0.5rem",
                    lineHeight: "1.8rem",
                    color: "#1ca600",
                }}
            >
                {amount} zł
            </TableCell>
            <TableCell style={{ width: "50px", padding: " 0.5rem" }}>
                <Icon
                    component="button"
                    style={{
                        marginRight: "0.5rem",
                        border: "none",
                        cursor: "pointer",
                        backgroundColor: "transparent",
                    }}
                >
                    <DeleteForeverOutlinedIcon
                        color="black"
                        onClick={handleDeleteIncome}
                    />
                </Icon>
            </TableCell>
        </TableRow>
    );
};

export default IncomeItem;
