import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import MelodyLogo from "../LogoAndSVGS/melodyLogo";

const Navigation = () => {
  const currentUser = useSelector((state) => state.session.user);

  return (
    <div className="NavBar">
      {currentUser ? (
        <ProfileButton />
      ) : (
        <>
          <MelodyLogo />
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
        </>
      )}
    </div>
  );
};

export default Navigation;
