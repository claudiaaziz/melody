import React, { useEffect, useState } from "react";
import MelodyLogo from "../../static/LogoAndSVGS/melodyLogo";
import "./SideMenu.css";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../static/LogoAndSVGS/sideMenu/home.svg";
import { ReactComponent as SearchIcon } from "../../static/LogoAndSVGS/sideMenu/search.svg";
import { ReactComponent as LibraryIcon } from "../../static/LogoAndSVGS/sideMenu/library.svg";
import { ReactComponent as PlusIcon } from "../../static/LogoAndSVGS/sideMenu/plus.svg";
import { ReactComponent as CreatePlaylistIcon } from "../../static/LogoAndSVGS/sideMenu/createPlaylist.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  createPlaylist,
  fetchPlaylists,
  getPlaylists,
} from "../../store/playlists";
import PlaylistIndex from "../Playlists/PlaylistIndex";

const SideMenu = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector((state) => state.session.user);
  const playlists = useSelector(getPlaylists);

  // start logic for create playlist dropdown
  const [isCreatePlaylistOpen, setCreatePlaylistOpen] = useState(false);

  const toggleCreatePlaylist = () => {
    setCreatePlaylistOpen(!isCreatePlaylistOpen);
  };

  const closeCreatePlaylistModal = () => {
    setCreatePlaylistOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isCreatePlaylistOpen) {
        closeCreatePlaylistModal();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isCreatePlaylistOpen]);

  const [redirectToPlaylist, setRedirectToPlaylist] = useState(false);
  const [createdPlaylist, setCreatedPlaylist] = useState(null);

  const handleCreatePlaylist = async () => {
    const amtPlaylists = Object.values(playlists).length;
    const createPlaylistData = {
      name: `My Playlist #${amtPlaylists + 1}`,
      user_id: currentUser.id,
    };

    const playlist = await dispatch(createPlaylist(createPlaylistData));

    if (playlist) {
      setCreatedPlaylist(playlist);
      setRedirectToPlaylist(true);
    }
  };

  // end logic for create playlist dropdown

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
            <SearchIcon />
            Search
          </li>
        </ul>
      </div>

      {/* library */}
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
              {/* create playlist dropdown */}
              {isCreatePlaylistOpen && (
                <div
                  className="createPlaylistDropdown"
                  onClick={() => {
                    if (currentUser) {
                      handleCreatePlaylist();
                    } else {
                      history.push("/signup");
                    }
                  }}
                >
                  <div className="createPlaylist">
                    <CreatePlaylistIcon />
                    Create a new playlist
                  </div>
                </div>
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