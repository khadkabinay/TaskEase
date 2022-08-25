import React from "react";
import classes from "./ProfileInfoCard.module.css";
import { Link } from "react-router-dom";

const ProfileInfoCard = (props) => {
  const { _id, name, email, image } = props.data;

  return (
    <>
      <div>
        <img src={image} alt={"profile"} />
        <div>
          <h5>{name}</h5>
          <h5>{email}</h5>
        </div>
        <Link to={`/users/${_id}/taskdetail`} className={classes.linkSpace}>
          MORE
        </Link>
      </div>
    </>
  );
};

export default ProfileInfoCard;
