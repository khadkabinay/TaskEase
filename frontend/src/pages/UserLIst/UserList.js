import React from 'react'
import UserModel from '../../models/UserModel'
import TaskModel from '../../models/TaskModel'
import User from '../../components/User/User'
import TaskList from '../../components/Tasks/TaskList'
import NewTask from '../../components/NewTask/NewTask';
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import classes from  './UserList.module.css'



class UserList extends React.Component{
    state ={
        users: [],
        tasks: [],
        showUserDetail: false
    }

    
    componentDidMount() {
            this.fetchTasks()
            this.fetchUsers()
    }


    fetchTasks = () =>{
        TaskModel.all()
        .then(json => {
            this.setState({
                tasks: json.tasks
            })
        })

    }

    fetchUsers = () =>{
        UserModel.all().then((data) => {
            this.setState({
                users: data.users
            })
        
        })

    }


    deleteUser = (id,task) =>{
        UserModel.destroy(id, task).then((json) => {
            this.fetchUsers()
            this.fetchTasks()
        });
    };


    handleDetail = (userDetail) => {
            this.setState({
                showUserDetail : !this.state.showUserDetail
            })
    }


    
        displayUser = (userData) =>{
            return userData.map(user =>{
                return <User user={user}  key={user._id} deleteUser={this.deleteUser}  handleUser={() => this.handleDetail(this.state.showUserDetail)} showUserDetail= {this.state.showUserDetail}/>
            
            
        })

        }

        displayProgressBar = (users) =>{
            return users.map(user =>{
                return <ProgressBar  userProgress ={user}  key={user._id} tasks={this.state.tasks} />
            
                
            })

        }


    render(){
    
    
        return (
    <div  className={classes.AllUser}>
            <div >
                {/* <div className={classes.SubContainer}><NewTask  history={this.props.history} fetchTasks={this.fetchTasks} fetchUsers={this.fetchUsers}/></div> */}
                <div className={classes.SubContainer}>{ this.displayProgressBar(this.state.users)}</div>
                <div className={classes.SubContainer} className={classes.UserContainer}>{this.displayUser(this.state.users)}</div>
                <div className={classes.SubContainer}><TaskList tasks={this.state.tasks}  fetchTasks ={this.fetchTasks}/></div>
            </div> 
    </div>

            );

    }
}


export default UserList;





