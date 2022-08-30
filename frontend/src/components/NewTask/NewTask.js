import React, { useState, useEffect } from "react";
import TaskModel from "../../models/TaskModel";
import UserModel from "../../models/UserModel";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atoms";
import { useHistory } from "react-router-dom";
import classes from "./NewTask.module.css";

const NewTask = (props) => {
  const [logInUser, setLogInUser] = useRecoilState(userState);
  let history = useHistory();
  const [userData, setUserData] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState(Date);
  const [isCompleted, setIsCompleted] = useState(false);
  const [user, setUser] = useState("");
  const [adminUser, setAdminUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    UserModel.all().then((data) => {
      setUserData(data.usersData);
      setAdminUser(data.adminUser);
      setLoading(false);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    TaskModel.create({ name, isCompleted, date, user }).then((data) => {
      if (logInUser.isAdmin) {
        history.push(`/users/${data.task.user}/taskdetail`);
      } else {
        history.push(`/users/${logInUser._id}/taskdetail`);
      }
    });
  };

  return (
    <div className={classes.newTaskBox}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Task</label>
          <input
            type="text"
            name="name"
            placeholder="Write your task !"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div>
          {!logInUser.isAdmin ? (
            <div>
              {loading ? (
                <h2>Loading ...</h2>
              ) : (
                <div>
                  <label>Who do you want to asign to ?</label>
                  <select name="user" onChange={(e) => setUser(e.target.value)}>
                    <option>Asign to admin</option>
                    <option value={adminUser[0]._id}>
                      {adminUser[0].name}
                    </option>
                  </select>
                </div>
              )}
            </div>
          ) : (
            <div>
              <label>Who do you want to asign to ?</label>
              <select name="user" onChange={(e) => setUser(e.target.value)}>
                <option>Choose Name</option>
                {userData.map((user) => (
                  <option value={user._id} key={user._id}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        <button type="submit" value="Add Task">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default NewTask;
