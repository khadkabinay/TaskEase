import React, { useState } from "react";
import classes from "./TaskDetail.module.css";

const TaskDetail = (props) => {
  const [changeState, setChangeState] = useState(false);
  const changeHandler = () => {
    return setChangeState(true);
  };

  console.log(changeState, "changeState");
  return (
    <div className={classes.taskDetailCard} onClick={changeHandler}>
      {props.children}
    </div>
  );
};

export default TaskDetail;
