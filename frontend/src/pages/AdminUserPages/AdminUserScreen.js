import React, { useState, useEffect } from "react";
import UserModel from "../../models/UserModel";
import SingleUser from "../../components/User/SingleUser";
import classes from "./AdminUser.module.css";
import globalStyles from "../../Assets/global-styles/bootstrap.min.module.css";
import cn from "classnames";

const AdminUserScreen = () => {
  const [basicUsers, setBasicUsers] = useState([]);

  useEffect(() => {
    UserModel.all().then((data) => {
      setBasicUsers(data.basicUsers);
    });
  }, []);

  const displayBasicUsers = (users) => {
    return users.map((user) => {
      return <SingleUser key={user._id} data={user} />;
    });
  };

  return (
    <>
      <h1>Admin user page </h1>
      <div className={cn(globalStyles.container, classes["Custom-container"])}>
        {displayBasicUsers(basicUsers)}
      </div>
    </>
  );
};

export default AdminUserScreen;
