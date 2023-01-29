import React, { useContext, useEffect, useState } from "react";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Colors,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

const DoughnutIncome = ({ currentIncomeItems }) => {
    ChartJS.register(ArcElement, Tooltip, Legend, Colors);

    const data = {
        labels: currentIncomeItems.map((income) => {
            return income.category;
        }),

        datasets: [
            {
                data: currentIncomeItems.map((income) => {
                    return income.amount;
                }),
                backgroundColor: [
                    "#000AFF",
                    "#FF0000",
                    "#9EFF00",
                    "#7300A9",
                    "#020053",
                    "#FA00FF",
                    "#1F9A00",
                    "#A5A5A5",
                    "#790000",
                    "#00E8DA",
                    "#FF6B00",
                    "#000000",
                    "#FFE600",
                    "#FF0000",
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

export default DoughnutIncome;
