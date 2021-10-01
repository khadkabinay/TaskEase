import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import classes from "./SingleTask.module.css";
import globalStyles from "../../Assets/global-styles/bootstrap.min.module.css";

const SingleTask = (props) => {
  return (
    <>
      <div className={globalStyles.card}>
        <li className={globalStyles["list-group-item"]}>
          {props.data.length !== 0 ? (
            props.data.map((task) => <h6>{task.name}</h6>)
          ) : (
            <h6>No task yet</h6>
          )}
        </li>
      </div>
    </>
  );
};

export default SingleTask;
