import React from "react";
import classes from "./ProfileCard.module.css";

const ProfileCard = (props) => {
  return <div className={classes["profile-card"]}>{props.children}</div>;
};

export default ProfileCard;
