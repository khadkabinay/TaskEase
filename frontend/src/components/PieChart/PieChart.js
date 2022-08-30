import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as chartJS } from "chart.js/auto";
import classes from "./PieChart.module.css";

const PieChart = (props) => {
  return (
    <div className={classes.pieChart}>
      <h1>Progress Tracker</h1>
      <Pie data={props.chartData} />
    </div>
  );
};

export default PieChart;
