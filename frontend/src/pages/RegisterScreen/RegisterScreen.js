import React, { useState } from "react";
import AuthModel from "../../models/AuthModel";
import classes from "./RegisterScreen.module.css";

function Register(props) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumer] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    AuthModel.register({
      name,
      username,
      email,
      image,
      password,
      phoneNumber,
    }).then((response) => {
      if (response.status === 201) {
        props.history.push("/login");
      } else {
        setError(response.message);
      }
    });
  }

  return (
    <div className={classes.registerCard} style={{ width: "30%" }}>
      <h2>Register for an Account</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"></label>
          <div>
            <input
              type="text"
              name="name"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
        </div>
        <div>
          <label htmlFor="username"></label>
          <input
            type="text"
            name="username"
            placeholder="username"
            className="form-control"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="image"></label>
          <input
            type="text"
            name="image"
            placeholder="image"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber"></label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="phone Number"
            onChange={(e) => setPhoneNumer(e.target.value)}
            value={phoneNumber}
          />
        </div>
        <input type="submit" value="Register" className={classes.registerBtn} />
      </form>
    </div>
  );
}

export default Register;
