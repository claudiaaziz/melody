import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPlaylists } from "../../../store/playlists";
import "./PlaylistIndex.css";
import playlistCover from "../../../static/images/playlistCover.png";

const PlaylistIndex = () => {
  const playlists = useSelector(getPlaylists);
  const currentUser = useSelector((state) => state.session.user);

  return (
    <div>
      <ul className="playlistList">
        {playlists.map((playlist) => (
          <li key={playlist.id}>
            <NavLink
              to={`/playlists/${playlist.id}`}
              className="playlistListItem"
              activeClassName="activePlaylistItem"
            >
              <img src={playlistCover} alt="" className="playlistCover"></img>
              <div className="playlistContent">
                <div className="playlistName">{playlist.name}</div>
                <div className="username">{currentUser.username}</div>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistIndex;
