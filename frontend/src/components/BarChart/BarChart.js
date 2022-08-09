import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as chartJS } from "chart.js/auto";

const BarChart = (props) => {
  return <Bar data={props.chartData} />;
};

export default BarChart;
