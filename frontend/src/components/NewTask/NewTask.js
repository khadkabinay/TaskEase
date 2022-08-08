import React, { useState, useEffect } from "react";
import TaskModel from "../../models/TaskModel";
import UserModel from "../../models/UserModel";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atoms";
import { useHistory } from "react-router-dom";

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
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Task</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Task"
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
                  <label>
                    Asign a Task
                    <select
                      name="user"
                      onChange={(e) => setUser(e.target.value)}
                      className="form-control"
                    >
                      <option>Choose Name</option>
                      <option value={adminUser[0]._id}>
                        {adminUser[0].name}
                      </option>
                    </select>
                  </label>
                </div>
              )}
            </div>
          ) : (
            <div>
              <label>
                Asign a Task
                <select
                  name="user"
                  onChange={(e) => setUser(e.target.value)}
                  className="form-control"
                >
                  <option>Choose Name</option>
                  {userData.map((user) => (
                    <option value={user._id} key={user._id}>
                      {user.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          )}
        </div>

        <button type="submit" value="Add Task" className="fas fa-pen">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default NewTask;
