import React, { useState, useEffect } from "react";
import UserModel from "../../models/UserModel";
import SingleUser from "../../components/User/SingleUser";
import classes from "./AdminUser.module.css";
import globalStyles from "../../Assets/global-styles/bootstrap.min.module.css";
import cn from "classnames";

const AdminUserScreen = () => {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   UserModel.all().then((data) => {
  //     setUsers(data.users);
  //   });
  // }, [users]);
  // const displayAllUsers = (users) => {
  //   return users.map((user) => {
  //     return <SingleUser key={user._id} data={user} />;
  //   });
  // };

  return (
    // <div className={cn(globalStyles.container, classes["Custom-container"])}>
    //   {displayAllUsers(users)}
    // </div>
    <>
      <h1>Admin user page </h1>
    </>
  );
};

export default AdminUserScreen;
