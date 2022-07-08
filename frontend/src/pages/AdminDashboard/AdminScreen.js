import React, { useState, useEffect } from "react";
import UserModel from "../../models/UserModel";
import { Link } from "react-router-dom";
import UserProfile from "../../components/Profile/UserProfile";
import DashboardContainer from "../../components/DashboardContainer/DashboardContainer";
import FontIcon from "../../components/FontIcon/FontIcon";
import DashboardOption from "../../components/DashboardOption/DashboardOption";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
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
        <Link className={classes["item-space"]}>
          <FontIcon icon={faAlignJustify} />
        </Link>
        <DashboardOption />
        {displayBasicUsers(adminData)}
      </DashboardContainer>
    </>
  );
};

export default AdminScreen;
