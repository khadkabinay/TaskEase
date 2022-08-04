import React, { useState } from "react";
import cn from "classnames";
import classes from "./ProfileInfoCard.module.css";
import globalStyles from "../../Assets/global-styles/bootstrap.min.module.css";
import { Link } from "react-router-dom";
import TaskDetail from "../TaskDetail/TaskDetail";

const ProfileInfoCard = (props) => {
  const { _id, name, email, image, tasks } = props.data;

  return (
    <>
      <div className={cn(globalStyles.card, classes.cardWidth)}>
        <img
          src={image}
          className={globalStyles["card-img-top"]}
          alt={"profile"}
        />
        <div className={globalStyles["card-body"]}>
          <h5 className={globalStyles["card-title"]}>{name}</h5>
          <h5 className={globalStyles["card-text"]}>{email}</h5>
        </div>

        {/* <div>
          {tasks.map((task) => (
            <TaskDetail key={task._id}>{task.name}</TaskDetail>
          ))}
        </div> */}

        <Link to={`/users/${_id}/taskdetail`} className={classes.linkSpace}>
          MORE
        </Link>
      </div>
    </>
  );
};

export default ProfileInfoCard;
