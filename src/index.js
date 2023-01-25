import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./context/AppContext";
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
        <AppProvider>
            <App />
            </AppProvider>
        </StyledEngineProvider>
    </React.StrictMode>
);
