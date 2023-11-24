import React, { useEffect, useState } from "react";
import playlistCover from "../../../static/images/playlistCover.png";
import { ReactComponent as DotsIcon } from "../../../static/LogoAndSVGS/dots.svg";
import { ReactComponent as EditPlaylistIcon } from "../../../static/LogoAndSVGS/playlists/editPlaylist.svg";

const PlaylistShowPageHeader = ({ playlist, currentUser }) => {
  const [isEditPlaylistDropdownOpen, setIsEditPlaylistDropdownOpen] = useState(false);

  const toggleEditPlaylistDropdown = () => {
    setIsEditPlaylistDropdownOpen(!isEditPlaylistDropdownOpen);
  };

  const closeEditPlaylistDropdown = () => {
    setIsEditPlaylistDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isEditPlaylistDropdownOpen) {
        closeEditPlaylistDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isEditPlaylistDropdownOpen]);

  return (
    <>
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
      <div className="dotsContainer">
        <DotsIcon className="dotsIcon" onClick={toggleEditPlaylistDropdown} />
        {isEditPlaylistDropdownOpen && (
          <div className="editPlaylistDropdown">
            <EditPlaylistIcon/>
            <p>Edit Details</p>
          </div>
        )}
      </div>
    </>
  );
};

export default PlaylistShowPageHeader;