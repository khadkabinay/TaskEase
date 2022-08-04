import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atoms";
import classes from "./DeleteMsgScreen.module.css";

const DeleteMsgScreen = () => {
  const [user, setUser] = useRecoilState(userState);

  const logOut = () => {
    setUser(null);
    localStorage.clear();
  };
  return (
    <div className={classes.msgBox}>
      <h4>You have successfully deleted your profile</h4>
      <h2>
        Please{" "}
        <Link onClick={logOut} to={"/"}>
          logOut
        </Link>
      </h2>
    </div>
  );
};

export default DeleteMsgScreen;
