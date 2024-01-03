import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as DotsIcon } from "../../../static/svgs/dots.svg";
import playlistCover from "../../../static/images/playlistCover.png";
import { useSelector } from "react-redux";

const PlaylistIndexItem = ({ playlist, onDotsClick }) => {
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
        <DotsIcon
          className="dotsIcon"
          onClick={(e) => {
            e.preventDefault();
            onDotsClick(playlist.id);
          }}
        />
      </NavLink>
    </li>
  )
};

export default PlaylistIndexItem;