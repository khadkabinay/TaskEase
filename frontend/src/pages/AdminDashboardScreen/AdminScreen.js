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
import { userData } from "../../components/DataSet";

const labelName = ["sonu", "aarush"];
const labelArrayFalse = [2, 3];
const labelArrayTrue = [3, 5];

let completedTask = 0;
let inCompletedTask = 0;

const AdminScreen = () => {
  const [user, setUser] = useRecoilState(userState);
  const [userData, setUsersData] = useState([]);
  const [taskData, setTaskData] = useState({});

  useEffect(() => {
    UserModel.all().then((data) => {
      setUsersData(data.userData);
    });
  }, [setUsersData]);

  // useEffect(()=> {
  //   const data =  {
  //     labels: userData.map((data) => data.name),
  //     datasets: [
  //       {
  //         label: 'False',
  //         data: userData.tasks.map((task) => { if(!task.isCompleted) {
  //             return
  //         }}),
  //         backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //       },
  //       {
  //         label: 'True',
  //         data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //         backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //       },
  //     ],
  //   };

  //   setTaskData(data)

  // }, [])

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
        <Profile data={user} />
        <Link to={user.isAdmin && `/users/admin/allusers`}>All Users</Link>
        <div>
          {/* <div>
            <BarChart chartData={chartData} />{" "}
          </div> */}
        </div>
      </DashboardContainer>
    </>
  );
};

export default AdminScreen;
