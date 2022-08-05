import React, { useState, useEffect } from "react";
import TaskModel from "../../models/TaskModel";

export const TaskEditScreen = (props) => {
  const id = props.match.params.id;
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    TaskModel.show(id).then((data) => {
      setName(data.task.name);
      setUserId(data.task.user);
    });
  }, [id, userId]);

  //   useEffect(() => {
  //     TaskModel.edit(id, { name }).then((data) => {
  //       console.log("updated");
  //     });
  //   }, [id, name]);

  const submitHandler = (e) => {
    e.preventDefault();
    TaskModel.edit(id, { name }).then((data) => {
      props.history.push(`/users/${userId}/taskdetail`);
    });
  };

  return (
    <div>
      <h2>UPDATE</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <input type="submit" value="UPDATE" />
      </form>
    </div>
  );
};
