import React from "react";
import TaskModel from '../../models/TaskModel' 
import UserModel from '../../models/UserModel'
import TaskList from '../Tasks/TaskList' 
import "./NewTask.css"


class NewTask extends React.Component {
    state = {
        name :'',
        date :'',
        iscompleted : false,
        users: [],
        user: null,
    }
    
    
    componentDidMount() {
        this.fetchUsers();
      
    
    }

    
    fetchUsers = () => {
      UserModel.all()
      .then(json => {
        this.setState({
          users: json.users
          
        })
      })
    }


    handleSubmit = (event) => {
      event.preventDefault();
        TaskModel.create(this.state)
            .then(json => {
                this.setState({
                  name: ''
                  //fetchTasks fuction runs after name gets empty to make sure that tasks are up to date
                },()=>this.props.fetchTasks())

            })
    }



    handleChange = (event) => {
      this.setState({
                [event.target.name]: event.target.value
            })
    }



    render() {
        return (
            <div  className='newtask-form'>
                <form onSubmit={this.handleSubmit}>
                    <div  className="form-group">
                        <label htmlFor='name'>Task</label>
                        <input
                            type='text'
                            name='name'
                            className="form-control"
                            placeholder="Task"
                            onChange={this.handleChange}
                            value={this.state.name}
                        />
                    </div>
                      <div  className="form-group">
                        <label htmlFor='date'>Due Date</label>
                        <input
                            type='Date'
                            name='date'
                            className="form-control"
                            onChange={this.handleChange}
                            value={this.state.date}
                        />
                    </div>
                    <div >
                    <label>
                      Assign To
                      <select name="user" value={this.state.value} onChange={this.handleChange}   className="form-control">
                      <option value={null}>Choose Name</option>
                        {this.state.users.map(user => 
                        <option value={user._id} key={user.id}>{user.name}</option>
                      )}
                      </select>
                    </label>
                    </div>
                    <button type='submit' value ="Add Task" className="newtask-btn fas fa-pen">Add Task</button>
                </form>
                
            </div>
        )
    }
}





export default NewTask;


