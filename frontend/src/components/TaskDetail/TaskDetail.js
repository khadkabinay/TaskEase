import React, { useState } from "react";
import classes from "./TaskDetail.module.css";
import { Link } from "react-router-dom";
import TaskModel from "../../models/TaskModel";

const TaskDetail = (props) => {
  const { _id, name, isCompleted } = props.data;
  const [isDone, setIsDone] = useState(isCompleted);

  const submitHadler = (e) => {
    e.preventDefault();
    TaskModel.edit(_id, { isCompleted: !isDone }).then((data) => {
      setIsDone(data.task.isCompleted);
    });
  };

  return (
    <>
      <div className={classes.taskDetailCard}>
        {name}
        <label>
          <input
            name="isDone"
            type="checkbox"
            checked={isDone}
            onChange={submitHadler}
          />
        </label>
        <div>
          <Link to={`/users/task/${_id}/edit`}>UPDATE</Link>
        </div>
      </div>
    </>
  );
};

export default TaskDetail;
