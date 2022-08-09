import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as chartJS } from "chart.js/auto";
import classes from "./BarChart.module.css";

const optionData = {
  options: {
    scales: {
      y: {
        min: 1,
        max: 100,
      },
      // plugins: {
      //   zoom: {
      //     pan: {
      //       Type: Number,
      //       default: 1,
      //     },
      //   },
      // },
    },
  },
};

const BarChart = (props) => {
  return (
    <div className={classes.barChart}>
      <Bar data={props.chartData} />
    </div>
  );
};

export default BarChart;
