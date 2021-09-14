import React, { useState } from "react";
import UserModel from "../../models/UserModel";
import AuthModel from "../../models/AuthModel"
import classes from  './NewUser.module.css'


function NewUser(props) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumer] = useState("")
  const [role, setRole] = useState("");
  const [error, setError] = useState("");


  function handleSubmit(event) {
    event.preventDefault();
    AuthModel.register({ name, username, email,image,password,phoneNumber }).then(
      (response) => {
        if (response.status === 201) {
          props.history.push("/login");
        } else {
          setError(response.message);
        }
      }
    );

  }

  return (
    <div className={classes.RegisterCard} style={{width: "30%"}}>
      <h2>Register for an Account</h2>
       {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit} className="form-horizontal">
        <div className="form-group">
          <label htmlFor='name' className="control-label">Name&ensp;</label>
          <div >
          <input 
            type='text'
            name='name'
            placeholder="name"
            class="form-control"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          </div>
        </div >
        <div className="form-group">
          <label htmlFor='username'className="control-label">Username &ensp;</label>
          <input
            type='text'
            name='username'
            placeholder="username"
            class="form-control"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div  className="form-group">
          <label htmlFor='email' className="control-label">Email &ensp;</label>
          <input
            type='text'
            name='email'
            placeholder='email'
            class="form-control" 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div  className="form-group">
          <label htmlFor='image' className="control-label">Image &ensp;</label>
          <input
            type='text' 
            name='image'
            placeholder='image'
            class="form-control" 
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </div>
        <div className="form-group">
          <label htmlFor='password' className="control-label">Password &ensp;</label>
          <input
            type='password'
            name='password'
            placeholder='password'
            class="form-control" 
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div  className="form-group" >
          <label htmlFor='phoneNumber' className="control-label">phone Number &ensp;</label>
          <input
            type='text'
            name='phoneNumber'
            placeholder='phone Number'
            class="form-control" 
            onChange={(e) => setPhoneNumer(e.target.value)}
            value={phoneNumber}
          />
        </div>
          {/* <div className="form-group">
          <label htmlFor='role'>Role&ensp;

              <select name="role" value={role}  onChange={(e) => setRole(e.target.value)}  class="form-control" >
                        <option value={role}>Select a Role</option>
                        <option >admin</option>
                        <option >normalUser</option>

                </select>
            </label>
          </div> */}
        <input type='submit' value="Create An Account" className={classes.RegisterBtn} />
      </form>
    </div>
  );
}

export default NewUser;





