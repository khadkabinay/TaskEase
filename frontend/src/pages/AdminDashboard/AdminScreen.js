import React, { useState, useEffect } from "react";
import UserModel from "../../models/UserModel";
import UserProfile from "../../components/Profile/UserProfile";
import DashboardContainer from "../../components/DashboardContainer/DashboardContainer";
import classes from "./AdminScreen.module.css";
import globalStyles from "../../Assets/global-styles/bootstrap.min.module.css";
import cn from "classnames";

const AdminScreen = () => {
  const [usersData, setUsersData] = useState([]);
  const [adminData, setAdminData] = useState([]);

  useEffect(() => {
    UserModel.all().then((data) => {
      setUsersData(data.userData);
    });

    UserModel.all().then((data) => {
      setAdminData(data.adminData);
    });
  }, []);

  console.log(adminData, "adminData");

  const displayBasicUsers = (users) => {
    return users.map((user) => {
      return <UserProfile key={user._id} data={user} />;
    });
  };

  return (
    <>
      <DashboardContainer
        className={cn(globalStyles.container, classes["Custom-container"])}
      >
        {displayBasicUsers(usersData)}
        {displayBasicUsers(adminData)}
      </DashboardContainer>
    </>
  );
};

export default AdminScreen;
