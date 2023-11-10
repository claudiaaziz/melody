import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

const Navigation = () => {
  const currentUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (currentUser) {
    sessionLinks = <ProfileButton user={currentUser} />;
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <ul>
        <li>
          <NavLink to="/signup" className="signup">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="login">
            Log In
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
