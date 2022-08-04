import React from "react";
import { Switch, Route, Navigate } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen/HomeScreen";
import AdminScreen from "../pages/AdminDashboardScreen/AdminScreen";
import DashboardScreen from "../pages/DashboardScreen/DashboardScreen";
import ProfileEditScreen from "../pages/ProfileEditScreen/ProfileEditScreen";
import DeleteMsgScreen from "../pages/DeleteMsgScreen/DeleteMsgScreen";
import EditTask from "../components/Task/EditTask";
import NewTaskScreen from "../pages/NewTaskScreen/NewTaskScreen";
import TaskDetailScreen from "../pages/TaskDetailScreen/TaskDetailScreen";
import LoginScreen from "../pages/LoginScreen/LoginScreen";
import RegisterScreen from "../pages/RegisterScreen/RegisterScreen";
import { useRecoilValue } from "recoil";
import { loggedInState } from "../recoil/selectors";
import { useRecoilState } from "recoil";
import { userState } from "../recoil/atoms";

const Routes = (props) => {
  const [user, setUser] = useRecoilState(userState);
  const loggedIn = useRecoilValue(loggedInState);

  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/register" component={RegisterScreen} />
      <Route exact path="/login" component={LoginScreen} />
      {loggedIn && (
        <Switch>
          <Route path="/users/:id/edit" component={ProfileEditScreen} />
          <Route path="/users/:id/taskdetail" component={TaskDetailScreen} />
          <Route exact path="/users/dashboard" component={DashboardScreen} />
          <Route exact path="/users/newtask" component={NewTaskScreen} />
          {user.isAdmin ? (
            <Route exact path="/users/admin" component={AdminScreen} />
          ) : (
            <Route
              path="*"
              render={() => (
                <h3 style={{ color: "red" }}>"Sorry ! Page Is Not Found"</h3>
              )}
            />
          )}
          <Route path="/users/msgscreen" component={DeleteMsgScreen} />
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
