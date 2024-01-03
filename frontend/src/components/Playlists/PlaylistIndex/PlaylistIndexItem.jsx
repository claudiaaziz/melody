import React from "react";
import { NavLink } from "react-router-dom";
import playlistCover from "../../../static/images/playlistCover.png";
import { useSelector } from "react-redux";

const PlaylistIndexItem = ({ playlist }) => {
  const currentUser = useSelector((state) => state.session.user);

  return(
    <li key={playlist.id}>
      <NavLink
        to={`/playlists/${playlist.id}`}
        className="playlistIndexItem"
        activeClassName="activePlaylistIndexItem"
      >
        <img src={playlistCover} alt="" className="playlistCover"></img>
        <div className="playlistContent">
          <div className="playlistName">{playlist.name}</div>
          <div className="username">{currentUser?.username}</div>
        </div>
      </NavLink>
    </li>
  )
};

export default PlaylistIndexItem;