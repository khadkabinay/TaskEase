import React from "react";
import cn from "classnames";
import classes from "./HomeScreen.module.css";
import globalStyles from "../../Assets/global-styles/bootstrap.min.module.css";
import Footer from "../../components/Footer/Footer";

const HomeScreen = () => {
  return (
    <>
      <div className={classes.HomePage}>
        <h1
          className={cn(
            classes.TaskTitle,
            globalStyles["bg-info"],
            globalStyles["opacity-25"]
          )}
        >
          &nbsp;Welcome To TaskEase
        </h1>
      </div>
      <Footer />
    </>
  );
};

export default HomeScreen;
