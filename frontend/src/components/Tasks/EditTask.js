import React from 'react';
import TaskModel from '../../models/TaskModel';
import './EditTask.css'


class EditTask extends React.Component {
    state = {
        name: '',

      
    }

    componentDidMount() {
        this.fetchTask();
    }

    fetchTask = () => {
     TaskModel.show(this.props.match.params.id)
            .then(json => {
                this.setState({
                    ...json.task
                    
                 })
            })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        TaskModel.edit(this.props.match.params.id, this.state)
            .then(json => {
                this.props.history.push(`/users`)
            })
    }

    
    handleChange = (event) => { 
            this.setState({
                [event.target.name]: event.target.value
            })
        
    }

    render() {
        return (
            <div className="task-edit-form">
                <h2>Edit Task</h2>
                <i class="fas fa-pen-square"></i>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor='name'></label>
                        <input
                            type='text'
                            name='name'
                            className="form-control"
                            onChange={this.handleChange}
                            value={this.state.name}
                        />
                    </div>
                  <input type='submit' value='Update task'  className="task-edit-btn"/>
                </form>
            </div>
        )
    }
}

export default EditTask;






































