import React, { useEffect } from "react";
import MelodyLogo from "../../static/LogoAndSVGS/melodyLogo";
import "./SideMenu.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../static/LogoAndSVGS/sideMenu/home.svg";
import { ReactComponent as SearchIcon } from "../../static/LogoAndSVGS/sideMenu/search.svg";
import { ReactComponent as LibraryIcon } from "../../static/LogoAndSVGS/sideMenu/library.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylists } from "../../store/playlists";
import PlaylistIndex from "../Playlists/PlaylistIndex";
import CreatePlaylist from "./CreatePlaylist";

const SideMenu = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);

  useEffect(() => {
    if (currentUser) dispatch(fetchPlaylists());
  }, [dispatch, currentUser]);

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
            <NavLink
              exact
              to="/search"
              className="menuItem"
              activeClassName="activeLink"
            >
              <SearchIcon />
              Search
            </NavLink>
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
              <CreatePlaylist />
            </li>
          </div>
          <PlaylistIndex />
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
