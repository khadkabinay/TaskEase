import React from "react";
import classes from "./Button.module.css";
import globalStyles from "../../Assets/global-styles/bootstrap.min.module.css";
import cn from "classnames";

const Button = (props) => {
  return (
    <div>
      <button
        type="button"
        className={cn(`${classes.btn} ${globalStyles["btn btn-success"]} `)}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
