import React, { useState, useEffect } from "react";
import UserModel from "../../models/UserModel";
import ProfileInfoCard from "../../components/ProfileInfoCard/ProfileInfoCard";
import classes from "./UsersDashboardScreen.module.css";

const UsersDashboardScreen = () => {
  const [userData, setUsersData] = useState([]);

  useEffect(() => {
    UserModel.all().then((data) => {
      setUsersData(data.userData);
    });
  }, [setUsersData]);

  const displayUserInfo = (users) => {
    return users.map((user) => {
      return <ProfileInfoCard key={user._id} data={user} />;
    });
  };
  return (
    <div className={classes.allUserStyleBox}>{displayUserInfo(userData)}</div>
  );
};

export default UsersDashboardScreen;
