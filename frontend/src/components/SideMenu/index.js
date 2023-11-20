import React from "react";
import MelodyLogo from "../LogoAndSVGS/melodyLogo";
import "./SideMenu.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../LogoAndSVGS/sideMenu/home.svg";
import { ReactComponent as SearchIcon } from "../LogoAndSVGS/sideMenu/search.svg";
import { ReactComponent as LibraryIcon } from "../LogoAndSVGS/sideMenu/library.svg";

const SideMenu = () => {
  return (
    <div className="sideMenu">
      <div className="linkSection">
        <ul className="menuList">
          <li>
            <MelodyLogo />
          </li>
          <li>
            <NavLink
              exact
              to="/"
              className="menuItem"
              activeClassName="activeLink"
            >
              <HomeIcon />
              Home
            </NavLink>
          </li>
          <li className="menuItem">
            <SearchIcon />
            Search
          </li>
        </ul>
      </div>

      <div className="librarySection">
        <ul className="menuList">
          <li className="menuItem">
            <LibraryIcon />
            Your Library
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;