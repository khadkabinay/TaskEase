import React, { useEffect } from "react";
import UserModel from "../../models/UserModel";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atoms";
import classes from "./Header.module.css";

const Header = (props) => {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    if (localStorage.getItem("uid"))
      UserModel.all().then((response) => {
        setUser(response.data);
      });
  }, [setUser]);

  function logOut() {
    setUser(null);
    localStorage.clear();
  }

  return (
    <header>
      <>
        <div className={classes.brand}>
          <h1 className={classes.brandName}>TASKEASE</h1>
          <div>
            {user ? (
              <div>
                {user.isAdmin ? (
                  <ul className={classes.headerNavbar}>
                    <li>
                      <NavLink
                        to={user.isAdmin ? `/users/admin` : `/users/dashboard`}
                        style={{ textDecoration: "none" }}
                      >
                        {user.name.toUpperCase()}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        onClick={logOut}
                        style={{ textDecoration: "none" }}
                      >
                        LOG OUT
                      </NavLink>
                    </li>
                  </ul>
                ) : (
                  <ul className={classes.headerNavbar}>
                    <li>
                      <NavLink
                        to={user.isAdmin ? `/users/admin` : `/users/dashboard`}
                        style={{ textDecoration: "none" }}
                      >
                        {user.name.toUpperCase()}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        onClick={logOut}
                        style={{ textDecoration: "none" }}
                      >
                        LOG OUT
                      </NavLink>
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <ul className={classes.headerNavbar}>
                <li>
                  <NavLink to="/" style={{ textDecoration: "none" }}>
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/login"} style={{ textDecoration: "none" }}>
                    LOG IN
                  </NavLink>{" "}
                </li>
                <li>
                  <NavLink to="/register" style={{ textDecoration: "none" }}>
                    SIGN UP
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </>
    </header>
  );
};

export default Header;
