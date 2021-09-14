import React from 'react'
import {Link} from 'react-router-dom'
import UserModel from '../../models/UserModel'
import TaskModel from '../../models/TaskModel'
import User from '../../components/User/User'
import TaskList from '../../components/Tasks/TaskList';
import NewTask from '../../components/NewTask/NewTask';
import TaskDetail from '../TaskDetail/TaskDetail'
import Task from '../../components/Tasks/Task'
import './ShowUser.css'



const  ShowUser  =(props) =>  {

//     state ={
//         user: [],
//         tasks: []
//     }

//     componentDidMount() {
//         this.fetchTasks()
//         this.fetchUser()

// }


// fetchTasks = () =>{
//     TaskModel.all()
//     .then(json => {
//         this.setState({
//             tasks: json.tasks
//         })
//     })

// }

// fetchUser = () => {
//     UserModel.show(this.props.match.params.id).then((data) => {
//         this.setState({
//             user: data.user
//         })
//     })}


//     displayOneTask = (tasks, user) => {
//         return user.tasks.map( (task , idx) => {
//             return <TaskDetail  task={task}  key={idx}  />
            
//         })
//     }

   


        return (
        <div >
        {/* // <div className="container" className="user-show">
        //         <div className="row p-2">
        //             <User user={this.state.user}/>
        //             <div className="col-9">
        //                 <h1 className="task-list-title">Assigned Task Lists</h1>
        //                 <div >{ this.state.user.tasks === undefined || this.state.user.tasks.length == 0 ? <h>No Task is Assigned yet</h> :<div>{this.displayOneTask(this.state.user.tasks, this.state.user)}</div>} </div>
        //             </div>
        //         </div>
        //         <div className="row p-3">
        //             <div className="col-7">
        //             <NewTask fetchTasks={this.fetchTasks} />
        //             </div>
        //         </div> 
        //     </div> */}

            <div>{props.data.name}</div>
        </div>
        );

    }


    
        

    




export default ShowUser;

