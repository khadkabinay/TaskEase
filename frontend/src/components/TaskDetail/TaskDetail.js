import React from "react";
import classes from "./TaskDetail.module.css";
import { Link } from "react-router-dom";

const TaskDetail = (props) => {
  const { _id, name } = props.data;
  return (
    <>
      <div className={classes.taskDetailCard}>
        {name}{" "}
        <div>
          <Link to={`/users/task/${_id}/edit`}>UPDATE</Link>
        </div>
      </div>
    </>
  );
};

export default TaskDetail;
