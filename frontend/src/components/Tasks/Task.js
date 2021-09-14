
import React from 'react';
import {Link} from 'react-router-dom'
import TaskModel from '../../models/TaskModel'
import './Task.css'


  const Task = (props)=> {
    const {name,user,isCompleted, date, _id } = props.task

   
      
    return (
      <div>
         <div className="card mb-2 task-box">
            <div className='card-body' >
                 <h5 className="task-name" style={{background:isCompleted ? "green": "none"}}>{name} </h5>
                  <p>Due date:&nbsp;{date}</p> 
                <div>
                  {user.image ===  null ? <p>No Image</p>:  
                  <img src={user.image} style={{borderRadius:"50%" , width :"40px",height: "40px"}}/> }
                   {user.name === null ? <p>No Name</p> :<p>{user.name}</p> }
                </div>
                   <span className="edit-button" ><Link to={`/tasks/${_id}/edit`} className="far fa-edit" ></Link></span>
                   <span className="delete-button" > <Link to={`/users`} style={{color: 'black'}}  onClick={()=>props.deleteTask(_id, user)} className="fas fa-trash-alt" ></Link></span>

            </div>

         </div>
      
      </div>
    );
    
    
  }
  
  
  
  export default Task;
