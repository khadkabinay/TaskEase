import React from 'react';
import {useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import UserModel from "../../models/UserModel";
import { useRecoilState } from "recoil"
import { userState } from "../../recoil/atoms";
import './Header.css';




const Header = (props) => {
    const [user, setUser] = useRecoilState(userState)

    
  useEffect(function () {
    if (localStorage.getItem("uid")) {
      UserModel.all().then((response) => {
        setUser(response.data)
      })
    }

  }, []);


  function logOut(){
      setUser(null)
      localStorage.clear()
  }


    return (
        <header >
            <>
            {user ? (
              <div >
              {user.role === "admin" ? (<div>
                      <ul className="header">
                          <li><NavLink to='/users' className="btn btn-style">Admin</NavLink></li>    
                          <li><NavLink to='/' onClick={logOut} className="btn btn-style">Log Out</NavLink></li>    
                      </ul> 
                      </div>) : (<div>
                      <ul className="header">
                            <li><NavLink to={`/users/${user._id}`} className="btn btn-style">Employee</NavLink></li> 
                            <li><NavLink to='/' onClick={logOut} className="btn btn-style">Log Out</NavLink></li> 
                      </ul>
                
                    </div>)}
                </div> ) :(
                <div >
                    <ul className="header">
                        <li><NavLink to='/' className="btn btn-style">Home</NavLink></li>
                        <li><NavLink to={"/login"} className="btn btn-style">Login</NavLink> </li>
                        <li><NavLink to='/register' className="btn btn-style">Sign Up</NavLink></li>
                    </ul>
                </div>
                ) }

            </>
        </header>
    )
}

export default Header;


