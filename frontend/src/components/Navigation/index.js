import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";

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
    <ul>
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
        {sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
