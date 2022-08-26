import React, { useState, useEffect } from "react";
import UserModel from "../../models/UserModel";
import TaskDetail from "../../components/TaskDetail/TaskDetail";
import ProfileInfoCard from "../../components/ProfileInfoCard/ProfileInfoCard";
import { Link } from "react-router-dom";

const TaskDetailScreen = (props) => {
  const [usersData, setUsersData] = useState([]);
  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    UserModel.all().then((data) => {
      setUsersData(data.usersData);
    });
  }, []);

  useEffect(() => {
    UserModel.show(props.match.params.id).then((data) => {
      setTaskData(data.user.tasks);
    });
  }, [props.match.params.id]);

  const displayFilteredUser = (users) => {
    const filteredUser = users.filter(
      (user) => props.match.params.id === user._id
    );
    return filteredUser.map((user) => (
      <ProfileInfoCard key={user._id} data={user} />
    ));
  };

  const displayFilteredTaskDetail = (tasks, userData) => {
    return tasks.map((task) => <TaskDetail key={task._id} data={task} />);
  };

  return (
    <>
      <div>{displayFilteredUser(usersData)}</div>
      <div>
        <Link to={`/users/newtask`}>CREATE A TASK</Link>
      </div>
      <div>{displayFilteredTaskDetail(taskData)}</div>
    </>
  );
};

export default TaskDetailScreen;
