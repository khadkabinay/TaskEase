import React from "react";
import classes from "./DashboardContainer.module.css";

const DashboardContainer = (props) => {
  return <div className={`${classes["grid-container"]}`}>{props.children}</div>;
};

export default DashboardContainer;
