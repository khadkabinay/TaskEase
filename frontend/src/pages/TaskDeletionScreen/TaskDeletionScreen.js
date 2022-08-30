import React, { useState, useEffect } from "react";
import TaskModel from "../../models/TaskModel";
import classes from "./TaskDeletionScreen.module.css";

const TaskDeletionScreen = (props) => {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    TaskModel.show(props.match.params.id).then((data) => {
      setUserId(data.task.user);
    });
  }, [props.match.params.id]);

  const removeTask = () => {
    TaskModel.destroy(props.match.params.id).then((data) => {
      props.history.push(`/users/${userId}/taskdetail`);
    });
  };

  const cancelTask = () => {
    return props.history.push(`/users/${userId}/taskdetail`);
  };

  return (
    <div className={classes.deletionMsgBox}>
      <h1>Please ,confirm to delete it !</h1>
      <div>
        <button
          type="button"
          onClick={removeTask}
          className={classes.confirmBtn}
        >
          Confirm
        </button>
        <button type="button" onClick={cancelTask}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TaskDeletionScreen;
