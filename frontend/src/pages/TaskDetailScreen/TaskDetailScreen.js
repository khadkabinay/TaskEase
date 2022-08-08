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

// const [isCompleted, setIsCompleted] = useState(props.task.isCompleted);
// const { name, date, _id } = props.task;

// function checkTask(id) {
//   setIsCompleted(!isCompleted);
//   TaskModel.edit(_id, { isCompleted: !isCompleted }).then((json) => {
//     console.log(json, "json data");
//   });
// }

// return (
//   <div>
//     <div>
//       <div>
//         <h3
//           onClick={(event) => checkTask(_id)}
//           style={{ textDecoration: isCompleted ? "line-through" : "none" }}
//         >
//           {name}
//         </h3>
//         <p>Due Date:&nbsp;{date}</p>
//       </div>
//     </div>
//     {/* <Link to={`/users/${_id}`}  onClick={()=>props.deleteTask(_id, name)}>DELETE</Link> */}
//   </div>
// );
