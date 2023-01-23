import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const initialState = {
    budget: 2000,
    expenses: [
        { id: 12, name: "shopping", amount: "150", category: "home" },
        { id: 13, name: "Bitcoin", amount: "200", category: "investment" },
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
                dispatch }}
        >
            <div>{props.children}</div>
        </AppContext.Provider>
    );
};
