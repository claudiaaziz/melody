import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";
import ProfileMenu from "./ProfileMenu";

const Navbar = () => {
  const currentUser = useSelector((state) => state.session.user);

  return (
    <div className="navbarContainer">
      <div className="navbar">
        {currentUser ? (
          // loggedInNav
          <ProfileMenu />
        ) : (
          <>
            {/* loggedOutNav */}
            <ul>
              <li>
                <NavLink to="/signup">
                  <button id="signupBtn" className="navbarButton">
                    Sign Up
                  </button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/login">
                  <button id="loginBtn" className="navbarButton">
                    Log In
                  </button>
                </NavLink>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
