import React from "react";
import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer>
      <div className={classes["footer-bar"]}>
        <h5>Copyright@TaskEase2020</h5>
      </div>
    </footer>
  );
};

export default Footer;
