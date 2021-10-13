import React from "react";
import SingleTask from "../Task/SingleTask";
import cn from "classnames";
import classes from "./SingleUser.module.css";
import globalStyles from "../../Assets/global-styles/bootstrap.min.module.css";

const SingleUser = (props) => {
  const { name, email, image } = props.data;
  return (
    <div>
      <div className={cn(globalStyles.card, classes["Card-Width"])}>
        <img
          src={image}
          className={globalStyles["card-img-top"]}
          alt={"profile image"}
        />
        <div className={globalStyles["card-body"]}>
          <h5 className={globalStyles["card-title"]}>{name}</h5>
          <h5 className={globalStyles["card-text"]}>{email}</h5>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
