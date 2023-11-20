import React from "react";
import MelodyLogo from "../LogoAndSVGS/melodyLogo";
import "./SideMenu.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../LogoAndSVGS/sideMenu/home.svg";
import { ReactComponent as SearchIcon } from "../LogoAndSVGS/sideMenu/search.svg";
import { ReactComponent as LibraryIcon } from "../LogoAndSVGS/sideMenu/library.svg";
import { ReactComponent as PlusIcon } from "../LogoAndSVGS/sideMenu/plus.svg";

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
          <div className="libraryContainer">
            <li className="menuItem">
              <LibraryIcon />
              Your Library
            </li>
            <li className="menuItem">
              <NavLink
                to="/"
                className="plusButton"
                activeClassName="activeLink"
              >
                <PlusIcon />
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
