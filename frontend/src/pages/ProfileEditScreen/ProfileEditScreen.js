import React, { useState, useEffect } from "react";
import UserModel from "../../models/UserModel";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atoms";

const ProfileEditSreen = (props) => {
  const [user, setUser] = useRecoilState(userState);
  const [name, setName] = useState(user.name);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [image, setImage] = useState(user.image);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  useEffect(() => {
    UserModel.all().then((data) => {
      setUser(data.data);
    });
  }, [name, username, email, image, phoneNumber, setUser]);

  const destroyProfile = () => {
    if (window.confirm("would you like to delete your profile?")) {
      setDeleteSuccess(true);
      UserModel.destroy(props.match.params.id).then((data) => {
        props.history.push("/users/msgscreen");
      });
    } else {
      setDeleteSuccess(false);
    }
  };

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
    <div style={{ width: "30%" }}>
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
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            className="form-control"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            type="Number"
            name="phoneNumber"
            className="form-control"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />
        </div>
        <input type="submit" value="UPDATE" />
      </form>
      <Link
        onClick={destroyProfile}
        to={!deleteSuccess ? `/users/${user._id}/edit` : "/users/msgscreen"}
      >
        DELETE
      </Link>
    </div>
  );
};

export default ProfileEditSreen;
