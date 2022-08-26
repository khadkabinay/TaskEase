import React, { useState, useEffect } from "react";
import UserModel from "../../models/UserModel";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atoms";
import { Link } from "react-router-dom";
import ProfileInfoCard from "../../components/ProfileInfoCard/ProfileInfoCard";
import Profile from "../../components/Profile/Profile";
import DashboardContainer from "../../components/DashboardContainer/DashboardContainer";
import BarChart from "../../components/BarChart/BarChart";
import classes from "./AdminScreen.module.css";

const AdminScreen = () => {
  const [user, setUser] = useRecoilState(userState);
  const [top3Users, setTop3Users] = useState([]);

  useEffect(() => {
    UserModel.all().then((data) => {
      setTop3Users(data.top3);
    });
  }, []);

  const taskRecord = {
    labels: top3Users !== undefined && top3Users.map((data) => data.name),
    datasets: [
      {
        label: "inComplete Tasks",
        data: top3Users.map((user) => user.inCompleteTask),
        backgroundColor: "#FBDF07",
      },
      {
        label: "completed Tasks",
        data: top3Users.map((user) => user.completedTask),
        backgroundColor: "#224B0C",
      },
    ],
  };

  return (
    <>
      <DashboardContainer>
        <Profile data={user} />
        <Link to={user.isAdmin && `/users/admin/allusers`}>All Users</Link>
        <div>
          <div>
            {top3Users !== undefined ? (
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
