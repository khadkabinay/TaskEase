import React, { useState, useEffect } from "react";
import TaskModel from "../../models/TaskModel";
import UserModel from "../../models/UserModel";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atoms";

const NewTask = (props) => {
  const [logInUser, setLogInUser] = useRecoilState(userState);
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
      console.log("Task is created");
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
        {/* <div className="form-group">
          <label htmlFor="date">Due Date</label>
          <input
            type="Date"
            name="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div> */}

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

// class NewTask extends React.Component {
//   state = {
//     name: "",
//     date: "",
//     iscompleted: false,
//     users: [],
//     user: null,
//   };

//   componentDidMount() {
//     this.fetchUsers();
//   }

//   fetchUsers = () => {
//     UserModel.all().then((json) => {
//       this.setState({
//         users: json.users,
//       });
//     });
//   };

// handleSubmit = (event) => {
//   event.preventDefault();
//   TaskModel.create(this.state).then((json) => {
//     this.setState(
//       {
//         name: "",
//       },
//       () => this.props.fetchTasks()
//     );
//   });
// };

// handleChange = (event) => {
//   this.setState({
//     [event.target.name]: event.target.value,
//   });
// };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Task</label>
//             <input
//               type="text"
//               name="name"
//               className="form-control"
//               placeholder="Task"
//               onChange={this.handleChange}
//               value={this.state.name}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="date">Due Date</label>
//             <input
//               type="Date"
//               name="date"
//               className="form-control"
//               onChange={this.handleChange}
//               value={this.state.date}
//             />
//           </div>
//           <div>
//             <label>
//               Assign To
//               <select
//                 name="user"
//                 value={this.state.value}
//                 onChange={this.handleChange}
//                 className="form-control"
//               >
//                 <option value={null}>Choose Name</option>
//                 {this.state.users.map((user) => (
//                   <option value={user._id} key={user.id}>
//                     {user.name}
//                   </option>
//                 ))}
//               </select>
//             </label>
//           </div>
//           <button type="submit" value="Add Task" className="fas fa-pen">
//             Add Task
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default NewTask;
