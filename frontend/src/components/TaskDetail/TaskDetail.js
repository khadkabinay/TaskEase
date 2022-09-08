import React, { useState } from "react";
import classes from "./TaskDetail.module.css";
import { Link } from "react-router-dom";
import TaskModel from "../../models/TaskModel";
import TaskDeletionScreen from "../../pages/TaskDeletionScreen/TaskDeletionScreen";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atoms";
import * as AntIcons from "react-icons/ai";

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
        <div>
          <h2>
            {name}
            <span>
              <input
                name="isDone"
                type="checkbox"
                checked={isDone}
                onChange={submitHadler}
              />
            </span>
          </h2>
        </div>
        <div>
          <Link to={`/users/task/${_id}/edit`}>
            <AntIcons.AiFillEdit className={classes.createIconStyle} />
          </Link>

          {user.isAdmin && (
            <Link to={`/users/task/${_id}/delete`}>
              <AntIcons.AiTwotoneDelete className={classes.deleteIconStyle} />
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default TaskDetail;
