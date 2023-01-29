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
        default:
            return state;
    }
};

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

let date = monthNames[new Date().getMonth()]



const income = JSON.parse(localStorage.getItem("income")) || [];
const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
const month = JSON.parse(localStorage.getItem("month")) || date;

const initialState = {
    income: [...income],    
    expenses: [...expenses],
    month: month,
};



export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);


    return (
        <AppContext.Provider
            value={{
                income: state.income,
                expenses: state.expenses,
                month: month,
                dispatch,

            }}
        >
            <div>{props.children}</div>
        </AppContext.Provider>
    );
};
