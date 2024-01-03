import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import playlistCover from "../../../static/images/playlistCover.png";

const PlaylistIndexItem = ({ playlist }) => {
  const currentUser = useSelector((state) => state.session.user);

  return(
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
  )
};

export default PlaylistIndexItem;