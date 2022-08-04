import React, { useState, useEffect } from "react";
import UserModel from "../../models/UserModel";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atoms";
import ProfileInfoCard from "../../components/ProfileInfoCard/ProfileInfoCard";
import Profile from "../../components/Profile/Profile";
import NewTask from "../../components/NewTask/NewTask";
import { Link } from "react-router-dom";
import DashboardContainer from "../../components/DashboardContainer/DashboardContainer";
import FontIcon from "../../components/FontIcon/FontIcon";
import DashboardModal from "../../components/DashboardModal/DashboardModal";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import classes from "./AdminScreen.module.css";
import globalStyles from "../../Assets/global-styles/bootstrap.min.module.css";
import cn from "classnames";

const AdminScreen = () => {
  const [user, setUser] = useRecoilState(userState);
  const [userData, setUsersData] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    UserModel.all().then((data) => {
      setUser(data.data);
      setUsersData(data.userData);
    });
  }, [setUser, setUsersData]);

  const displayUserInfo = (users) => {
    return users.map((user) => {
      return <ProfileInfoCard key={user._id} data={user} />;
    });
  };

  return (
    <>
      <DashboardContainer
        className={cn(globalStyles.container, classes.customContainer)}
      >
        <Link
          className={classes.itemSpace}
          onClick={() => setModal(true)}
          to={user.isAdmin ? "/users/admin" : "/users/dashboard"}
        >
          <FontIcon icon={faAlignJustify} />
        </Link>

        <Profile data={user} />
        {displayUserInfo(userData)}
        <Link to={`/users/newtask`}>CREATE A TASK</Link>
      </DashboardContainer>
    </>
  );
};

export default AdminScreen;
