import React, { useState } from "react";
import AuthModel from "../../models/AuthModel";
import UserModel from "../../models/UserModel";
import classes from "./LoginScreen.module.css";
import { useSetRecoilState } from "recoil";
import { userState } from "../../recoil/atoms";

function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const setUser = useSetRecoilState(userState);

  function handleSubmit(event) {
    event.preventDefault();
    AuthModel.login({ email, password }).then((response) => {
      if (response.status !== 200) {
        setError(response.message);
      } else {
        localStorage.setItem("uid", response.signedJwt);
        UserModel.all().then((response) => {
          setUser(response.data);
          if (response.data.isAdmin) {
            props.history.push(`/users/admin`);
          } else if (!response.data.isAdmin) {
            props.history.push("/users/dashboard");
          } else {
            props.history.push("/users/login");
          }
        });
      }
    });
  }

  return (
    <div className={classes.logForm} style={{ width: "30%" }}>
      <h2>LOG IN</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">
            <input
              type="text"
              name="email"
              placeholder="Email"
              className={classes.inputDiv}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              placeholder="password"
              className={classes.inputDiv}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
        </div>

        <input type="submit" value="Login" className={classes.logBtn} />
      </form>
    </div>
  );
}

export default LoginScreen;
