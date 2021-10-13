import React, { useState, useEffect } from "react";
import UserModel from "../../models/UserModel";
import SingleUser from "../../components/User/SingleUser";
import classes from "./BasicUser.module.css";
import globalStyles from "../../Assets/global-styles/bootstrap.min.module.css";
import cn from "classnames";
const BasicUserScreen = () => {
  const [basicUser, setBasicUser] = useState("");

  useEffect(() => {
    UserModel.all().then((response) => {
      setBasicUser(response.data);
    });
  }, []);

  return (
    <>
      <h1>Basic User page </h1>
      <div className={cn(globalStyles.container, classes["Custom-container"])}>
        <SingleUser data={basicUser} />
      </div>
    </>
  );
};

export default BasicUserScreen;
