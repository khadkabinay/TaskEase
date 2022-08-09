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
import BarChart from "../../components/BarChart/BarChart";
import classes from "./AdminScreen.module.css";
import globalStyles from "../../Assets/global-styles/bootstrap.min.module.css";
import cn from "classnames";

const AdminScreen = () => {
  const [user, setUser] = useRecoilState(userState);
  const [userData, setUsersData] = useState([]);

  useEffect(() => {
    UserModel.all().then((data) => {
      setUsersData(data.userData);
    });
  }, []);

  const taskRecord = {
    labels: userData !== undefined && userData.map((data) => data.name),
    datasets: [
      {
        label: "inComplete Tasks",
        data: userData.map((user) => user.inCompleteTask),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "completed Tasks",
        data: userData.map((user) => user.completedTask),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <>
      <DashboardContainer
        className={cn(globalStyles.container, classes.customContainer)}
      >
        <Profile data={user} />
        <Link to={user.isAdmin && `/users/admin/allusers`}>All Users</Link>
        <div>
          <div>
            {userData !== undefined ? (
              <BarChart chartData={taskRecord} />
            ) : (
              <h5>Loading ...plz wait..</h5>
            )}
          </div>
        </div>
      </DashboardContainer>
    </>
  );
};

export default AdminScreen;
