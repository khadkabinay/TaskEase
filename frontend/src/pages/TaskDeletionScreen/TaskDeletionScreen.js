import React, { useState, useEffect } from "react";
import TaskModel from "../../models/TaskModel";

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
    <div>
      <h1>Please ,confirm to delete it !</h1>
      <button type="button" onClick={removeTask}>
        Confirm
      </button>
      <button type="button" onClick={cancelTask}>
        Cancel
      </button>
    </div>
  );
};

export default TaskDeletionScreen;
