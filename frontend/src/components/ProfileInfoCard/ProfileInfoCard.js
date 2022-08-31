import React from "react";
import classes from "./ProfileInfoCard.module.css";
import { Link } from "react-router-dom";

const ProfileInfoCard = (props) => {
  const { _id, name, email, image } = props.data;

  return (
    <>
      <div className={classes.profileInfoBox}>
        <div>
          <img src={image} alt={"profile"} />
          <h3>{name}</h3>
          <h3>{email}</h3>
        </div>
        <div className={classes.linkStyleBtn}>
          <Link to={`/users/${_id}/taskdetail`} className={classes.linkStyle}>
            MORE
          </Link>
          <Link to={`/users/${_id}/delete`} className={classes.linkStyleDelete}>
            DELETE
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfileInfoCard;
