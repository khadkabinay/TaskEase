import React from "react";
import { Link } from "react-router-dom";
import classes from "./Profile.module.css";

const Profile = (props) => {
  const { _id, name, email, image } = props.data;

  return (
    <>
      <div className={classes.profileCard}>
        <img src={image} alt={"profile"} />
        <div>
          <h2>{name}</h2>
          <h2>{email}</h2>
          <Link to={`/users/${_id}/edit`} className={classes.linkSpace}>
            UPDATE
          </Link>

          <Link to={`/users/${_id}/taskdetail`} className={classes.linkSpace}>
            MORE
          </Link>
        </div>
      </div>
    </>
  );
};

export default Profile;
