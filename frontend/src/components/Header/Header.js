import React from "react";
import { useEffect } from "react";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import UserModel from "../../models/UserModel";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atoms";
import classes from "./Header.module.css";

const Header = (props) => {
  const [user, setUser] = useRecoilState(userState);

  //Provides consistancy for the user's authentication
  useEffect(function () {
    if (localStorage.getItem("uid")) {
      UserModel.all().then((response) => {
        setUser(response.data);
      });
    }
    //eslint-disable-next-line
  }, []);

  function logOut() {
    setUser(null);
    localStorage.clear();
  }

  return (
    <header>
      <>
        {user ? (
          <div>
            {user.role === "admin" ? (
              <div>
                <ul className={cn(classes.Header, classes.HeaderLi)}>
                  <li>
                    <NavLink to="/users">Admin</NavLink>
                  </li>
                  <li>
                    <NavLink to="/" onClick={logOut}>
                      Log Out
                    </NavLink>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <ul className={cn(classes.Header, classes.HeaderLi)}>
                  <li>
                    <NavLink to={`/users/${user._id}`}>Employee</NavLink>
                  </li>
                  <li>
                    <NavLink to="/" onClick={logOut}>
                      Log Out
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div>
            <ul className={cn(classes.Header, classes.HeaderLi)}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to={"/login"}>Login</NavLink>{" "}
              </li>
              <li>
                <NavLink to="/register">Sign Up</NavLink>
              </li>
            </ul>
          </div>
        )}
      </>
    </header>
  );
};

export default Header;
