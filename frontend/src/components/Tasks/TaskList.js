import React from 'react';
import {Link} from 'react-router-dom'
import TaskModel from '../../models/TaskModel';
import Task from './Task'

class TaskList extends React.Component {
 
    state = {
        isCompleted: false,
        
    }

 
    deleteTask = (id,user) => {
        console.log("deleted ",id ,user)

     TaskModel.destroy(id, user).then((json) => {
//   console.log(json , "json ")
//             const tasks = this.state.tasks.filter((task) => {
//               return task._id !== json.task._id;
//             });
//             // this.setState({tasks});
            this.props.fetchTasks()
        });
    };

    

     checkTask = (id,user) =>{
         console.log(this.state.isCompleted) 
         this.setState({
        isCompleted: !this.state.isCompleted
         })

        
        console.log(this.state.tasks)
      
     }


    
  displayTask = (tasks)=>{

    return this.props.tasks.map(task =>{
        return <Task task={task}   key={task._id} deleteTask ={this.deleteTask} isCompleted={this.state.isCompleted} checkTask={this.checkTask}/>})
    
  }
 
  
  
  render() {
      console.log("render ")
    
        return (
          <div>
              <div>
              {this.displayTask()}
              </div>
          </div>
        )
    }
}

export default TaskList;