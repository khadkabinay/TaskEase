import React, { useState, useEffect } from "react";
import UserModel from "../../models/UserModel";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atoms";
import classes from "./UserDeletionScreen.module.css";

const TaskDeletionScreen = (props) => {
  const [logInUser, setLogInUser] = useRecoilState(userState);
  const [user, setUser] = useState({});

  useEffect(() => {
    UserModel.show(props.match.params.id).then((data) => {
      setUser(data.user);
    });
  }, [props.match.params.id]);

  const removeUser = () => {
    UserModel.destroy(props.match.params.id).then((data) => {
      if (logInUser.isAdmin) {
        setUser(null);
        props.history.push(`/users/admin`);
      } else {
        setLogInUser(null);
        localStorage.clear();
        props.history.push(`/`);
      }
    });
  };

  const cancelUserDeletion = () => {
    if (logInUser.isAdmin) {
      props.history.push(`/users/admin`);
    } else {
      props.history.push(`/users/dashboard`);
    }
  };

  return (
    <div className={classes.deletionMsgBox}>
      <h1>Please, Confirm to delete this profile !</h1>
      <div>
        <button
          type="button"
          onClick={removeUser}
          className={classes.confirmBtn}
        >
          Confirm
        </button>
        <button type="button" onClick={cancelUserDeletion}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TaskDeletionScreen;
