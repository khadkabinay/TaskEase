import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atoms";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import FontIcon from "../../components/FontIcon/FontIcon";
import UserModel from "../../models/UserModel";
import UserProfile from "../../components/Profile/UserProfile";
import DashboardContainer from "../../components/DashboardContainer/DashboardContainer";
import classes from "./DashboardScreen.module.css";
import globalStyles from "../../Assets/global-styles/bootstrap.min.module.css";
import cn from "classnames";

const DashboardScreen = () => {
  const [user, setUser] = useRecoilState(userState);
  // const [basicUser, setBasicUser] = useState("");

  // useEffect(() => {
  //   UserModel.all().then((response) => {
  //     setBasicUser(response.data);
  //   });
  // }, []);
  return (
    <>
      {/* <div className={cn(globalStyles.container, classes["Custom-container"])}>
        <UserProfile data={basicUser} key={basicUser._id} />
      </div> */}
      <DashboardContainer>
        <FontIcon icon={faAlignJustify} />

        <UserProfile data={user} key={user._id} />
      </DashboardContainer>
    </>
  );
};

export default DashboardScreen;
