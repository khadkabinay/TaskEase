import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atoms";
import { Link } from "react-router-dom";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import UserModel from "../../models/UserModel";
import FontIcon from "../../components/FontIcon/FontIcon";
import Profile from "../../components/Profile/Profile";
import DashboardContainer from "../../components/DashboardContainer/DashboardContainer";
import PieChart from "../../components/PieChart/PieChart";
import classes from "./DashboardScreen.module.css";
const DashboardScreen = () => {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    UserModel.all().then((data) => {
      setUser(data.data);
    });
  }, [setUser]);

  const taskRecord = {
    labels: [
      `${user.inCompleteTask} inComplete Tasks`,
      `${user.completedTask} completed Tasks`,
    ],
    datasets: [
      {
        label: "Task Tracker",
        data: [user.inCompleteTask, user.completedTask],
        backgroundColor: ["#FBDF07", "#224B0C"],
      },
    ],
  };

  return (
    <>
      <DashboardContainer>
        <FontIcon icon={faAlignJustify} />
        <Profile data={user} key={user._id} />
        <PieChart chartData={taskRecord} />
      </DashboardContainer>
    </>
  );
};

export default DashboardScreen;
