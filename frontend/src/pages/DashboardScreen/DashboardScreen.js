import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atoms";
import UserModel from "../../models/UserModel";
import Profile from "../../components/Profile/Profile";
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
      `${user.inCompleteTask} InComplete Tasks`,
      `${user.completedTask} Completed Tasks`,
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
      <div className={classes.dashboardPageContainer}>
        <Profile data={user} key={user._id} />
        <PieChart chartData={taskRecord} />
      </div>
    </>
  );
};

export default DashboardScreen;
