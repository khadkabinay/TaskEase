import React, { useState } from "react";
import { Link } from "react-router-dom";
import TaskModel from "../../models/TaskModel";

const TaskDetail = (props) => {
  const [isCompleted, setIsCompleted] = useState(props.task.isCompleted);
  const { name, date, _id } = props.task;

  function checkTask(id) {
    setIsCompleted(!isCompleted);
    TaskModel.edit(_id, { isCompleted: !isCompleted }).then((json) => {
      console.log(json, "json data");
    });
  }

  return (
    <div>
      <div>
        <div>
          <h3
            onClick={(event) => checkTask(_id)}
            style={{ textDecoration: isCompleted ? "line-through" : "none" }}
          >
            {name}
          </h3>
          <p>Due Date:&nbsp;{date}</p>
        </div>
      </div>
      {/* <Link to={`/users/${_id}`}  onClick={()=>props.deleteTask(_id, name)}>DELETE</Link> */}
    </div>
  );
};

export default TaskDetail;
