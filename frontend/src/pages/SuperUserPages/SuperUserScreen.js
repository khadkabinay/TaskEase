import React, { useState, useEffect } from "react";
import UserModel from "../../models/UserModel";
import SingleUser from "../../components/User/SingleUser";
import classes from "./SuperUser.module.css";
import globalStyles from "../../Assets/global-styles/bootstrap.min.module.css";
import cn from "classnames";

const SuperUserScreen = () => {
  const [adminUsers, setAdminUsers] = useState([]);

  useEffect(() => {
    UserModel.all().then((data) => {
      setAdminUsers(data.adminUsers);
    });
  }, []);

  const displayAdminUsers = (users) => {
    return users.map((user) => {
      return <SingleUser key={user._id} data={user} />;
    });
  };

  return (
    <>
      <h1>Super user page </h1>
      <div className={cn(globalStyles.container, classes["Custom-container"])}>
        {displayAdminUsers(adminUsers)}
      </div>
    </>
  );
};

export default SuperUserScreen;
