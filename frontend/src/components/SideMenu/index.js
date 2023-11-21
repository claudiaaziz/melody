import React, { useState } from "react";
import MelodyLogo from "../LogoAndSVGS/melodyLogo";
import "./SideMenu.css";
import { NavLink, Redirect } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../LogoAndSVGS/sideMenu/home.svg";
import { ReactComponent as SearchIcon } from "../LogoAndSVGS/sideMenu/search.svg";
import { ReactComponent as LibraryIcon } from "../LogoAndSVGS/sideMenu/library.svg";
import { ReactComponent as PlusIcon } from "../LogoAndSVGS/sideMenu/plus.svg";
import { ReactComponent as CreatePlaylistIcon } from "../LogoAndSVGS/sideMenu/createPlaylist.svg";
import { useDispatch, useSelector } from "react-redux";
import { createPlaylist, getPlaylists } from "../../store/playlists";

const SideMenu = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  const playlists = useSelector(getPlaylists);

  const [isCreatePlaylistOpen, setCreatePlaylistOpen] = useState(false);
  const [redirectToPlaylist, setRedirectToPlaylist] = useState(false);
  const [createdPlaylist, setCreatedPlaylist] = useState(null);

  const toggleCreatePlaylist = () => {
    setCreatePlaylistOpen(!isCreatePlaylistOpen);
  };

  const handleCreatePlaylist = async () => {
    const createPlaylistData = {
      name: "My Playlist #1",
      user_id: currentUser.id,
    };

    const playlist = await dispatch(createPlaylist(createPlaylistData));

    if (playlist) {
      setCreatedPlaylist(playlist);
      setRedirectToPlaylist(true);
    }
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
                <div
                  className="createPlaylistDropdown"
                  onClick={handleCreatePlaylist}
                >
                  <p>
                    <CreatePlaylistIcon />
                    Create a new playlist
                  </p>
                </div>
              )}
            </li>
          </div>
          <ul className="playlistList">
            {playlists.map((playlist) => (
              <li key={playlist.id} className="menuItem">
                <NavLink
                  to={`/playlists/${playlist.id}`}
                  activeClassName="activeLink"
                >
                  {playlist.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </ul>
      </div>
      {redirectToPlaylist && createdPlaylist && (
        <Redirect to={`/playlists/${createdPlaylist.id}`} />
      )}
    </div>
  );
};

export default SideMenu;
