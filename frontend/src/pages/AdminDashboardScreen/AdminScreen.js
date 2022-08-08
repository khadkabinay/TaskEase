import React, { useState, useEffect } from "react";
import UserModel from "../../models/UserModel";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atoms";
import { Link } from "react-router-dom";
import FontIcon from "../../components/FontIcon/FontIcon";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import ProfileInfoCard from "../../components/ProfileInfoCard/ProfileInfoCard";
import Profile from "../../components/Profile/Profile";
import DashboardContainer from "../../components/DashboardContainer/DashboardContainer";
import classes from "./AdminScreen.module.css";
import globalStyles from "../../Assets/global-styles/bootstrap.min.module.css";
import cn from "classnames";

const AdminScreen = () => {
  const [user, setUser] = useRecoilState(userState);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    UserModel.all().then((data) => {
      setUser(data.data);
    });
  }, [setUser]);

  return (
    <>
      <DashboardContainer
        className={cn(globalStyles.container, classes.customContainer)}
      >
        <Link
          className={classes.itemSpace}
          onClick={() => setModal(true)}
          to={user.isAdmin ? "/users/admin" : "/users/dashboard"}
        ></Link>

        <Profile data={user} />
        <div>
          <Link to={user.isAdmin && `/users/admin/allusers`}>All Users</Link>
        </div>
      </DashboardContainer>
    </>
  );
};

export default AdminScreen;
