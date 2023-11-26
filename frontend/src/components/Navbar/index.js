import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";
import ProfileBtn from "./ProfileBtn";
import NavLinks from "../../static/LogoAndSVGS/NavLinks";

const Navbar = () => {
  const currentUser = useSelector((state) => state.session.user);

  return (
    <div className="navbarContainer">
      <div className="navbar">
      <NavLinks/>
        {currentUser ? (
          // loggedInNav
          <ProfileBtn />
        ) : (
          <>
            {/* loggedOutNav */}
            <ul>
              <li>
                <NavLink to="/signup">
                  <button id="navbarSignupBtn" className="navbarButton">
                    Sign Up
                  </button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/login">
                  <button id="navbarLoginBtn" className="navbarButton">
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
