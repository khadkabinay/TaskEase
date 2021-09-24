import React, { useState, useEffect } from "react";
import UserModel from "../../models/UserModel";
import TaskModel from "../../models/TaskModel";
import classes from "./UsersScreen.module.css";
import cn from "classnames";

const UsersScreen = () => {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    UserModel.all().then((data) => {
      setUsers(data.users);
    });
  }, [users]);

  useEffect(() => {
    TaskModel.all().then((json) => {
      setTasks(json.tasks);
    });
  }, [tasks]);

  const displayAllUsers = (users) => {
    return users.map((user) => {
      return (
        <>
          <h1 className={cn(classes.SubContainer)}>{user.name}</h1>
        </>
      );
    });
  };

  return <div className={classes.AllUsers}>{displayAllUsers(users)}</div>;
};

export default UsersScreen;
