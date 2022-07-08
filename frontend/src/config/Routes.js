import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeScreen from "../pages/Home/HomeScreen";
import AdminScreen from "../pages/AdminDashboard/AdminScreen";
import DashboardScreen from "../pages/Dashboard/DashboardScreen";
import Register from "../pages/Register/Register";
import ProfileEditScreen from "../pages/ProfileEditScreen/ProfileEditSreen";
import EditTask from "../components/Task/EditTask";
import Login from "../pages/Login/Login";
import { useRecoilValue } from "recoil";
import { loggedInState } from "../recoil/selectors";

const Routes = () => {
  const loggedIn = useRecoilValue(loggedInState);

  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      {loggedIn && (
        <Switch>
          <Route path="/users/:id/edit" component={ProfileEditScreen} />
          <Route path="/users/dashboard" component={DashboardScreen} />
          <Route path="/users/admin" component={AdminScreen} />
          {/* <Route path="/tasks/:id/edit" component={EditTask} /> */}
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
