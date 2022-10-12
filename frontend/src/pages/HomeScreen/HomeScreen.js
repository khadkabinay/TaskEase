import React from "react";
import classes from "./HomeScreen.module.css";
import Footer from "../../components/Footer/Footer";

const HomeScreen = () => {
  return (
    <>
      <div className={classes.homePageStyle}>
        <div>WELCOME TO TASKEASE</div>
        <div className={classes.imgContainerStyle}>
          <div className={classes.imgStyle}>
            <img
              src={require("../../Assets/images/smallshop.jpg")}
              alt="me with friends"
            />
            <h5>
              Are you tired of managing your small team ? This will help !
            </h5>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomeScreen;
