
import React from 'react';
import { Link} from 'react-router-dom';
import UserModel from '../../models/UserModel'
import NewTask from '../NewTask/NewTask'
import ShowUser from '../../pages/ShowUser/ShowUser'
import "./User.css"




const User = (props) => {
  // console.log(props, "this is a change i just made , users and tasks")
  
  const { name, image, email, _id, tasks} = props.user
  console.log(props)
  // console.log(props.user.tasks, "second user")
  
  console.log(props, "props")
  
 
  
  return (
    <div className="card justify-content-center ml-3 mb-1" style ={{width:"20em"}}>
        <img src={image} className="card-img-top"  style ={{width:"20em", height:"10em", padding:'5px' }}/>
        <h3 className="card-title">{name}</h3>
          {/* <UserShow  user={props.user}/> */}
         <div className="card-text">Assigned Tasks: { props.tasks === undefined || tasks.length == 0 ? <h>No Task</h> :<span>{tasks.length}</span>} </div>
          <p>{email}</p>

         <div >
           <button className="btn-bg-light p-1 m-2 text-light border-0"><Link to={`/users/${_id}/edit`} className="fas fa-user-edit">EDIT</Link></button>
            <button className="btn-danger p-1 border-0 round"><Link to={`/users`}   onClick={()=>props.deleteUser(_id,tasks)} className="fas fa-trash">DELETE</Link></button>
         </div>
          
             {/* <Link to={`/users/${_id}`} className="user-link" >More Detail</Link> */}
             
             <button  onClick={props.handleUser}>
               More Detail
             </button>
               {
                props.showUserDetail ? <ShowUser data={props.user}  /> : null
               }
        
    </div>
  );
}



export default User;


