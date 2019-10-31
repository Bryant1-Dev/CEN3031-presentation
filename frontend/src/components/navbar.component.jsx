import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logout from "./logout.component";
import "../style/navbar.style.css";

const NavBar = props => {
  const logout = () => {
    props.logout("/users/logout");
  };
  return (
    <nav className="navbar navbar-light bg-light navbar-expand-lg">
      <Link to="/" exact className="navbar-brand">
        Authentication Presentation
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" exact className="nav-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/mainmenu" className="nav-link">
              Main Menu
            </Link>
          </li>
          {!props.loggedIn ? (
            <>
              <li className="navbar-item">
                <Link to="/users/register" className="nav-link">
                  Register
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/users/login" className="nav-link">
                  Login
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="navbar-item">
                <Link to="/dashboard" className="nav-link">
                  Dashboard
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/protected" className="nav-link">
                  Protected
                </Link>
              </li>
              <li className="navbar-item">
                <Logout logout={logout} />
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
