import React from "react";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useSetRecoilState } from "recoil";
import { userState } from "../../recoil/atoms";
import classes from "./Header.module.css";

const Header = (props) => {
  const setUser = useSetRecoilState(userState);
  const user = useRecoilValue(userState);

  function logOut() {
    setUser(null);
    localStorage.clear();
  }

  return (
    <header>
      <>
        {user ? (
          <div>
            {user.isOwner ? (
              <div>
                <ul className={cn(classes.Header, classes.HeaderLi)}>
                  <li>
                    <NavLink to="/users/superuser">Super User</NavLink>
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
                    <NavLink to={`/users/basic`}>Basic User</NavLink>
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
