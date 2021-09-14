import React from 'react';
import UserModel from '../../models/UserModel';
import './EditUser.css'

class EditUser extends React.Component {
    state = {
        name: '',
        username: '',
        email: '',
        image: '',
        phoneNumber: '',
        completedTask: 0,
        role: ''
      
    }

    componentDidMount() {
        this.fetchUser();
    }

    fetchUser = () => {
     UserModel.show(this.props.match.params.id)
            .then(json => {
                this.setState({
                    ...json.user
                    
                 })
            })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        UserModel.edit(this.props.match.params.id, this.state)
            .then(json => {
                this.props.history.push(`/users/${this.props.match.params.id}`)
            })
    }

    
    handleChange = (event) => { 
            this.setState({
                [event.target.name]: event.target.value
            })
        
    }


    render() {
        return (
            <div className="edit-form" style={{width:"30%"}}>
                <h2>Edit</h2>
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label htmlFor='name'>Name</label>
                        <input
                            type='text'
                            name='name'
                            className="form-control"
                            onChange={this.handleChange}
                            value={this.state.name}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor='username'>Username</label>
                        <input
                            type='text'
                            name='username'
                            className="form-control"
                            onChange={this.handleChange}
                            value={this.state.username}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type='text'
                            name='email'
                            className="form-control"
                            onChange={this.handleChange}
                            value={this.state.email}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input
                            type='text'
                            name='image'
                            className="form-control"
                            onChange={this.handleChange}
                            value={this.state.image}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone number</label>
                        <input
                            type='text'
                            name='phoneNumber'
                            className="form-control"
                            onChange={this.handleChange}
                            value={this.state.phoneNumber}
                        />
                    </div>
                  <input type='submit' value='Update Profile'  className="edit-btn"/>
                </form>
            </div>
        )
    }
}

export default EditUser;




















































