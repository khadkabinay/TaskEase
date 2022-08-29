import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as chartJS } from "chart.js/auto";
import classes from "./BarChart.module.css";

const options = {
  scales: {
    y: {
      ticks: {
        min: 0,
        max: 100,
        stepSize: 1,
        color: "blue",
        font: {
          size: 24,
        },
      },
    },
    x: {
      ticks: {
        color: "red",
        font: {
          size: 24,
        },
      },
    },
  },
};

const BarChart = (props) => {
  return (
    <div className={classes.barChart}>
      <h1>Task Tracker</h1>
      <Bar data={props.chartData} options={options} />
    </div>
  );
};

export default BarChart;
