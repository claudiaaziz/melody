import React from "react";
import playlistCover from "../../../static/images/playlistCover.png";

const PlaylistShowPageHeader = ({ playlist, currentUser }) => {
  return (
    <div className="playlistShowHeader">
      <img src={playlistCover} alt="" className="playlistShowHeaderImg" />
      <div className="playlistDetails">
        <p>Playlist</p>
        <h2>{playlist.name}</h2>
        <div>
          <span>{currentUser.username}</span>
        </div>
      </div>
    </div>
  );
};

export default PlaylistShowPageHeader;