import React, { useEffect, useState } from "react";
import playlistCover from "../../../static/images/playlistCover.png";
import { ReactComponent as DotsIcon } from "../../../static/LogoAndSVGS/dots.svg";
import { ReactComponent as EditPlaylistIcon } from "../../../static/LogoAndSVGS/playlists/editPlaylist.svg";
import EditPlaylistModal from "./EditPlaylistModal/EditPlaylistModal"; 

const PlaylistShowPageHeader = ({ playlist, currentUser }) => {
  // edit dropdown
  const [isEditPlaylistDropdownOpen, setIsEditPlaylistDropdownOpen] = useState(false);
  const toggleEditPlaylistDropdown = () => setIsEditPlaylistDropdownOpen(!isEditPlaylistDropdownOpen);
  const closeEditPlaylistDropdown = () => setIsEditPlaylistDropdownOpen(false);

  // if the user clicks off edit dropdown
  useEffect(() => {
    const handleClickOutside = () => {
      if (isEditPlaylistDropdownOpen) {
        closeEditPlaylistDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isEditPlaylistDropdownOpen]);
  
  // edit modal
  const [isEditPlaylistModalOpen, setIsEditPlaylistModalOpen] = useState(false);
  const openEditPlaylistModal = () => {
    setIsEditPlaylistModalOpen(true);
    setIsEditPlaylistDropdownOpen(false); 
  };
  const closeEditPlaylistModal = () => setIsEditPlaylistModalOpen(false);

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
            <p>Edit playlist name</p>
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