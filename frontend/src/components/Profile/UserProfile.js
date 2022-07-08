import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import classes from "./UserProfile.module.css";
import globalStyles from "../../Assets/global-styles/bootstrap.min.module.css";

const UserProfile = (props) => {
  const { name, email, image } = props.data;
  return (
    <>
      <div className={cn(globalStyles.card, classes["Card-Width"])}>
        <img
          src={image}
          className={globalStyles["card-img-top"]}
          alt={"profile"}
        />
        <div className={globalStyles["card-body"]}>
          <h5 className={globalStyles["card-title"]}>{name}</h5>
          <h5 className={globalStyles["card-text"]}>{email}</h5>
          <Link to="/users/:id/edit">UPDATE</Link>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
