import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
    const expenses = [
        { id: 123123123, name: "Shopping", amount: 150, category: "home" },
        { id: 123123123, name: "medicine", amount: 150, category: "health" },
        { id: 234234234, name: "Bitcoin", amount: 200, category: "investment" },
        { id: 345345345, name: "Udemy", amount: 70, category: "education" },
        { id: 456456456, name: "Fuel", amount: 150, category: "home" },
        { id: 567567567, name: "Pets", amount: 55, category: "home" },
    ];

    return (
        <ul
            style={{
                border: "1px solid rgb(207, 207, 207)",
                borderRadius: "5px",
            }}
        >
            {expenses.map((expense) => {
                return (
                    <ExpenseItem
                        id={expense.id}
                        name={expense.name}
                        amount={expense.amount}
                        category={expense.category}
                    />
                );
            })}
        </ul>
    );
};

export default ExpenseList;
