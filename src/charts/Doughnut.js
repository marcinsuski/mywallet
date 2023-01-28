import React, { useContext, useEffect, useState } from "react";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Colors,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { AppContext } from "../context/AppContext";
import { MonitorHeartOutlined } from "@mui/icons-material";

const DoughnutChart = () => { 
    const { expenses, income, month } = useContext(AppContext);
    ChartJS.register(ArcElement, Tooltip, Legend, Colors);
    const [currentItems, setCurrentItems] = useState([]);

    useEffect(() => {
        let currentExpenses = expenses.map((item) =>
        item.month === month.toLowerCase() ? item : ''
        );
        setCurrentItems(currentExpenses)
        console.log(currentExpenses)
    
    }, [month])
   
    const data = {
        labels: expenses.map(expense => {return expense.category}),
    

        // {handleSearchExpenses().map((expense) => {
        //     return (
        //         <ExpenseItem
        //             key={expense.id}
        //             id={expense.id}
        //             name={expense.name}
        //             amount={expense.amount}
        //             category={expense.category}
        //             month={expense.month}
        //         />
        //     );
        // })}



        datasets: [
            {
                data: currentItems.map(expense => {return expense.amount}),
                backgroundColor: [
                    "#FF0000",
                    "#FF6B00",
                    "#FFE600",
                    "#9EFF00",
                    "#1F9A00",
                    "#00E8DA",
                    "#A5A5A5",
                    "#000AFF",
                    "#7300A9",
                    "#FA00FF",
                    "#FF0000",
                    "#000000",
                    "#790000",
                    "#020053",
                    "#7D2600",
                ],
                borderWidth: 2,
                cutout: "70%",
                redraw: true,
                borderRadius: 15,
            },
        ],
    };

    const options = {
        layout: {
            padding: 10,
        },
        plugins: {
            colors: {
                enabled: false,
            },
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: "Custom Chart Title",
                padding: {
                    top: 10,
                    bottom: 30,
                },
            },
        },
    };

    return (
        <div style={{ width: "300px", height: "300px" }}>
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default DoughnutChart;
