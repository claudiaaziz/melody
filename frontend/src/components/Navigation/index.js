import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navigation.css";
import ProfileMenu from "./ProfileMenu";

const Navigation = () => {
  const currentUser = useSelector((state) => state.session.user);

  return (
    <div className="navBar">
      {currentUser ? (
        // loggedInNav
        <ProfileMenu />
      ) : (
        <>
        {/* loggedOutNav */}
          <ul>
            <li>
              <NavLink to="/signup">
                <button id="signupBtn" className="navBarButton">
                  Sign Up
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/login">
                <button id="loginBtn" className="navBarButton">
                  Log In
                </button>
              </NavLink>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Navigation;
