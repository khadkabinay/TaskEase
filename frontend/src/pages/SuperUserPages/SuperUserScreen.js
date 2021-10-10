import React, { useState, useEffect } from "react";
import UserModel from "../../models/UserModel";

const SuperUserScreen = () => {
  const [adminUsers, setAdminUsers] = useState([]);

  // useEffect(() => {
  //   UserModel.all().then((response) => {
  //     // console.log(response);
  //     // setAdminUsers(response.adminUsers);
  //   });
  // }, []);

  // const displayAllUsers = (users) => {
  //   return users.map((user) => {
  //     return <SingleUser key={user._id} data={user} />;
  //   });
  // };

  return (
    // <div className={cn(globalStyles.container, classes["Custom-container"])}>
    //   {displayAllUsers(users)}
    // </div>
    <>
      <h1> superuser Screen </h1>
    </>
  );
};

export default SuperUserScreen;
