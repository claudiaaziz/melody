import React, { useState } from "react";
import MelodyLogo from "../../static/LogoAndSVGS/melodyLogo";
import "./SideMenu.css";
import { NavLink, Redirect } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../static/LogoAndSVGS/sideMenu/home.svg";
import { ReactComponent as SearchIcon } from "../../static/LogoAndSVGS/sideMenu/search.svg";
import { ReactComponent as LibraryIcon } from "../../static/LogoAndSVGS/sideMenu/library.svg";
import { ReactComponent as PlusIcon } from "../../static/LogoAndSVGS/sideMenu/plus.svg";
import PlaylistIndex from "../Playlists/PlaylistIndex";
import CreatePlaylistDropdown from "./CreatePlaylistDropdown";

const SideMenu = () => {
  const [redirectToPlaylist, setRedirectToPlaylist] = useState(false);
  const [createdPlaylist, setCreatedPlaylist] = useState(null);
  const [isCreatePlaylistOpen, setCreatePlaylistOpen] = useState(false);

  const toggleCreatePlaylist = () => {
    setCreatePlaylistOpen(!isCreatePlaylistOpen);
  };

  const closeCreatePlaylistModal = () => {
    setCreatePlaylistOpen(false);
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
                <CreatePlaylistDropdown
                  onClose={(playlist) => {
                    setCreatedPlaylist(playlist);
                    setRedirectToPlaylist(true);
                    closeCreatePlaylistModal();
                  }}
                />
              )}
            </li>
          </div>
          <PlaylistIndex />
        </ul>
      </div>
      {redirectToPlaylist && createdPlaylist && (
        <Redirect to={`/playlists/${createdPlaylist.id}`} />
      )}
    </div>
  );
};

export default SideMenu;
