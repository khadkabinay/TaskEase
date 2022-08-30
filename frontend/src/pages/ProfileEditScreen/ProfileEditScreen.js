import React, { useState, useEffect } from "react";
import UserModel from "../../models/UserModel";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atoms";
import classes from "./ProfileEditScreen.module.css";

const ProfileEditSreen = (props) => {
  const [user, setUser] = useRecoilState(userState);
  const [name, setName] = useState(user.name);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [image, setImage] = useState(user.image);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

  useEffect(() => {
    UserModel.all().then((data) => {
      setUser(data.data);
    });
  }, [name, username, email, image, phoneNumber, setUser]);

  const handleSubmit = (event) => {
    event.preventDefault();

    UserModel.edit(props.match.params.id, {
      name,
      username,
      email,
      image,
      phoneNumber,
    }).then((json) => {
      if (user.isAdmin) {
        props.history.push(`/users/admin`);
      } else {
        props.history.push(`/users/dashboard`);
      }
    });
  };

  return (
    <div className={classes.profileEditForm}>
      <div>
        <Button>
          <Link
            to={user.isAdmin ? "/users/admin" : "/users/dashboard"}
            style={{ textDecoration: "none" }}
          >
            GO BACK
          </Link>
        </Button>

        <h2>UPDATE PROFILE</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label htmlFor="image">Image</label>
            <input
              type="text"
              name="image"
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone number</label>
            <input
              type="Number"
              name="phoneNumber"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
          </div>
          <input
            type="submit"
            value="UPDATE"
            className={classes.formSubmitBtn}
          />
        </form>
      </div>
      <div className={classes.deleteBtn}>
        <Button>
          <Link to={`/users/${user._id}/delete`} className={classes.deleteLink}>
            DELETE
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProfileEditSreen;
