import React, { useState } from "react";
import classes from "./TaskDetail.module.css";
import { Link } from "react-router-dom";
import TaskModel from "../../models/TaskModel";
import TaskDeletionScreen from "../../pages/TaskDeletionScreen/TaskDeletionScreen";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atoms";

const TaskDetail = (props) => {
  const [user, setUser] = useRecoilState(userState);
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
        <div className={classes.btnGroupStyle}>
          <button type="button" className={classes.btnStyle}>
            <Link to={`/users/task/${_id}/edit`} className={classes.linkStyle}>
              UPDATE
            </Link>
          </button>
          {user.isAdmin && (
            <button type="button" className={classes.btnStyle}>
              <Link
                to={`/users/task/${_id}/delete`}
                className={classes.linkStyle}
              >
                DELETE
              </Link>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default TaskDetail;
