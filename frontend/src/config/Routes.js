import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import UsersSreen from "../pages/AdminPages/UsersScreen";
import UserScreen from "../pages/BasicUserPages/UserScreen";
import NewUser from "../pages/Register/NewUser";
import EditUser from "../pages/EditUser/EditUser";
import EditTask from "../components/Task/EditTask";
import Login from "../pages/Login/Login";
import { useRecoilValue } from "recoil";
import { loggedInState } from "../recoil/selectors";

const Routes = () => {
  const loggedIn = useRecoilValue(loggedInState);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={NewUser} />
      <Route exact path="/login" component={Login} />
      {loggedIn && (
        <Switch>
          <Route path="/users/:id/edit" component={EditUser} />
          <Route path="/users/:id" component={UserScreen} />
          <Route path="/users" component={UsersSreen} />
          <Route path="/tasks/:id/edit" component={EditTask} />
        </Switch>
      )}
      <Route
        path="*"
        render={() => (
          <h3 style={{ color: "red" }}>"Sorry ! Page Is Not Found"</h3>
        )}
      />
    </Switch>
  );
};

export default Routes;
