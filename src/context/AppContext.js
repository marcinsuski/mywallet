import { createContext, useReducer } from "react";

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
        case "SET_BUDGET":
            return {
                ...state,
                budget: [...state.budget, action.payload],
            };
        default:
            return state;
    }
};

const initialState = {
    budget: 2000,
    expenses: [
        {
            id: 12,
            name: "shopping",
            amount: 150,
            category: "home",
            month: "january",
        },
        {
            id: 13,
            name: "Bitcoin",
            amount: 200,
            category: "investment",
            month: "january",
        },
        {
            id: 14,
            name: "Car service",
            amount: 80,
            category: "Car",
            month: "january",
        },
    ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider
            value={{
                budget: state.budget,
                expenses: state.expenses,
                dispatch,
            }}
        >
            <div>{props.children}</div>
        </AppContext.Provider>
    );
};
