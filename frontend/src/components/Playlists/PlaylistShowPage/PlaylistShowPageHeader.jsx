import React, { useEffect, useState } from "react";
import playlistCover from "../../../static/images/playlistCover.png";
import { ReactComponent as DotsIcon } from "../../../static/LogoAndSVGS/dots.svg";
import { ReactComponent as EditPlaylistIcon } from "../../../static/LogoAndSVGS/playlists/editPlaylist.svg";
import EditPlaylistModal from "./EditPlaylistModal/EditPlaylistModal"; 

const PlaylistShowPageHeader = ({ playlist, currentUser }) => {
  const [isEditPlaylistDropdownOpen, setIsEditPlaylistDropdownOpen] = useState(false);
  const [isEditPlaylistModalOpen, setIsEditPlaylistModalOpen] = useState(false);

  const toggleEditPlaylistDropdown = () => {
    setIsEditPlaylistDropdownOpen(!isEditPlaylistDropdownOpen);
  };

  const openEditPlaylistModal = () => {
    setIsEditPlaylistModalOpen(true);
    setIsEditPlaylistDropdownOpen(false); 
  };

  const closeEditPlaylistDropdown = () => {
    setIsEditPlaylistDropdownOpen(false);
  };

  const closeEditPlaylistModal = () => {
    setIsEditPlaylistModalOpen(false);
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
          <div onClick={openEditPlaylistModal} className="editPlaylistDropdown">
            <EditPlaylistIcon />
            <p>Edit Details</p>
          </div>
        )}
        {isEditPlaylistModalOpen && (
          <EditPlaylistModal
            onClose={closeEditPlaylistModal}
            currentPlaylistName={playlist.name}
            playlistId={playlist.id}
          />
        )}
      </div>
    </>
  );
};

export default PlaylistShowPageHeader;
