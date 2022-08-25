import React from "react";
import classes from "./HomeScreen.module.css";
import Footer from "../../components/Footer/Footer";

const HomeScreen = () => {
  return (
    <>
      <div className={classes.homePage}>
        <h1>&nbsp;Welcome To TaskEase</h1>
      </div>
      <Footer />
    </>
  );
};

export default HomeScreen;
