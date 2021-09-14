import React, { useState } from "react";
import AuthModel from "../../models/AuthModel";
import UserModel from "../../models/UserModel";
import classes from './Login.module.css'
import { useSetRecoilState } from "recoil";
import { userState } from "../../recoil/atoms";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const setUser = useSetRecoilState(userState);




  

  function handleSubmit(event) {
    event.preventDefault();
    AuthModel.login({ email, password }).then((response) => {
        if (response.status !== 200) {
            setError(response.message)
          }else{
              localStorage.setItem("uid", response.signedJwt);
              UserModel.all().then((response) => {
                setUser(response.data);
              if(response.data.role === "normalUser"){
                props.history.push(`/users/${response.data._id}`);

              }else{
                props.history.push("/users");
                }
              });

            
          }
    });
  }





  return (
    <div  className={`card form-group ${classes.LogForm}`} style={{width:"20%"}}>
      <h2>Login</h2>
      {error && <p style={{ color: "red"}}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email' className="d-inline">Email</label>
          <input 
            type='text'
            name='email'
            class="form-control"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            
          
          />
        </div>
        <div >
          <label htmlFor='password' className="d-inline">Password</label>
          <input
            type='password'
            name='password'
            class="form-control"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <input type='submit' value='Login' class={classes.LogBtn} />
      </form>
    </div>
  );
}

export default Login;
