import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atoms";
import { Link } from "react-router-dom";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import UserModel from "../../models/UserModel";
import FontIcon from "../../components/FontIcon/FontIcon";
import Profile from "../../components/Profile/Profile";
import DashboardContainer from "../../components/DashboardContainer/DashboardContainer";
import classes from "./DashboardScreen.module.css";
const DashboardScreen = () => {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    UserModel.all().then((data) => {
      setUser(data.data);
    });
  }, [setUser]);

  return (
    <>
      <DashboardContainer>
        <FontIcon icon={faAlignJustify} />
        <Profile data={user} key={user._id} />
      </DashboardContainer>
    </>
  );
};

export default DashboardScreen;
