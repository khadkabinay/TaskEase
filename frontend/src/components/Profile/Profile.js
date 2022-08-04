import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import classes from "./Profile.module.css";
import globalStyles from "../../Assets/global-styles/bootstrap.min.module.css";

const Profile = (props) => {
  const { _id, name, email, image } = props.data;

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
