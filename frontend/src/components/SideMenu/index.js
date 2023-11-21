import React, { useState } from "react";
import MelodyLogo from "../LogoAndSVGS/melodyLogo";
import "./SideMenu.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../LogoAndSVGS/sideMenu/home.svg";
import { ReactComponent as SearchIcon } from "../LogoAndSVGS/sideMenu/search.svg";
import { ReactComponent as LibraryIcon } from "../LogoAndSVGS/sideMenu/library.svg";
import { ReactComponent as PlusIcon } from "../LogoAndSVGS/sideMenu/plus.svg";
import { ReactComponent as CreatePlaylistIcon } from "../LogoAndSVGS/sideMenu/createPlaylist.svg";

const SideMenu = () => {
  const [isCreatePlaylistOpen, setCreatePlaylistOpen] = useState(false);

const toggleCreatePlaylist = () => {
  console.log("Toggle Playlist Clicked");
  setCreatePlaylistOpen(!isCreatePlaylistOpen);
};


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
              <button className="plusButton" onClick={toggleCreatePlaylist}>
                <PlusIcon />
              </button>
              {isCreatePlaylistOpen && (
                <div className="createPlaylistDropdown">
                  <p>
                    <CreatePlaylistIcon />Create a new playlist
                  </p>
                </div>
              )}
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
