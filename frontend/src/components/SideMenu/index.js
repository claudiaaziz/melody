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
      <MelodyLogo />
      <ul className="menuList">
        <li>
          <NavLink exact to="/" className="menuLink">
            <HomeIcon />
            Home
          </NavLink>
        </li>
        <li className="menuLink">
          <SearchIcon />
          Search
        </li>
        <li className="menuLink">
          <LibraryIcon />
          Your Library
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
