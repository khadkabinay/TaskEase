import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = {
  color: "red",
  fontSize: "3em",
};

const FontIcon = (props) => {
  return <FontAwesomeIcon icon={props.icon} style={styles} />;
};

export default FontIcon;
