import { createContext, useReducer, useState } from "react";

const AppReducer = (state, action) => {
   
    switch (action.type) {
        case "ADD_EXPENSE":
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        case "DELETE_EXPENSE":
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                ),
            };
            case "ADD_INCOME":
                return {
                    ...state,
                    income: [...state.income, action.payload],
                };
            case "DELETE_INCOME":
                return {
                    ...state,
                    income: state.income.filter(
                        (income) => income.id !== action.payload
                    ),
                };
        case "SET_BUDGET":
            return {
                ...state,
                budget: action.payload,
            };
        default:
            return state;
    }
};

const income = JSON.parse(localStorage.getItem("income")) || 0;
const budget = JSON.parse(localStorage.getItem("budget")) || 0;
const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

const initialState = {
    income: [...income],
    budget: budget,
    expenses: [...expenses],


};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);


    return (
        <AppContext.Provider
            value={{
                income: state.income,
                budget: state.budget,
                expenses: state.expenses,
                dispatch,

            }}
        >
            <div>{props.children}</div>
        </AppContext.Provider>
    );
};
