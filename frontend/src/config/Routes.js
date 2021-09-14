import React from 'react'
import {useState, useEffect} from 'react'
import { Switch, Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import UserList from '../pages/UserLIst/UserList'
import ShowUser from '../pages/ShowUser/ShowUser'
import NewUser from "../pages/Register/NewUser"
import EditUser from "../pages/EditUser/EditUser"
import EditTask from '../components/Tasks/EditTask'
import UserModel from '../models/UserModel'
import Login from '../pages/Login/Login'
import { useRecoilValue } from "recoil";
import { loggedInState } from "../recoil/selectors";
import { userState } from '../recoil/atoms'





const Routes = (props) => {
  const loggedIn = useRecoilValue(loggedInState);
  const [role, setRole] = useState('')
  const [normalRole, setNormalRole] = useState('')
  

  
   useEffect(()=>{

     UserModel.all().then(user =>{
       if(loggedIn){
         user.users.forEach((user) => {
            if(user.role === "admin" && user.name === "Binay"){
               setRole(user.role)
              
           }else{
             setNormalRole(user.role)
           }
          })
       
      }})

   }, [])

    

  console.log(role)
  console.log(normalRole)
 


    return (
      
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route  exact path='/register' component={ NewUser } />
        <Route exact path='/login' component={Login } />
        {loggedIn && (
           <Switch>           
            <Route  path='/users/:id/edit' component={ EditUser } />
            <Route  path='/users/:id' component={ ShowUser } />
            <Route  path='/users'  component={ UserList } />
            {/* <Route  path='/tasks/new' component={ NewTask } /> */}
            <Route  path='/tasks/:id/edit' component={ EditTask } />     
          </Switch> )
        }
        <Route path='*' render={() => <h3 style={{color: "red"}}>"Sorry ! Page Is Not Found"</h3>} />
      </Switch>
    )
  }
  
  export default Routes;


 

