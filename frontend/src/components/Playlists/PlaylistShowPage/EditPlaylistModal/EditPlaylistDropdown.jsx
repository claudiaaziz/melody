import React, { useEffect, useState } from "react";
import { ReactComponent as DotsIcon } from "../../../../static/LogoAndSVGS/dots.svg";
import { ReactComponent as EditPlaylistIcon } from "../../../../static/LogoAndSVGS/playlists/editPlaylist.svg";
import EditPlaylistModal from "./EditPlaylistModal.jsx"; 

function EditPlaylistDropdown({playlist}) {
  const [isEditPlaylistDropdownOpen, setIsEditPlaylistDropdownOpen] = useState(false);
  const toggleEditPlaylistDropdown = () => setIsEditPlaylistDropdownOpen(!isEditPlaylistDropdownOpen);
  const closeEditPlaylistDropdown = () => setIsEditPlaylistDropdownOpen(false);

  // close edit dropdown if user clicks off 
  useEffect(() => {
    const handleClickOutside = () => isEditPlaylistDropdownOpen && closeEditPlaylistDropdown();
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
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
      <DotsIcon className="dotsIcon" onClick={toggleEditPlaylistDropdown} />
      {isEditPlaylistDropdownOpen && (
        <div onClick={openEditPlaylistModal} className="editPlaylistDropdown">
          <EditPlaylistIcon />
          <p>Edit playlist name</p>
        </div>
      )}
      {isEditPlaylistModalOpen && (
        <EditPlaylistModal
          closeEditPlaylistModal={closeEditPlaylistModal}
          currentPlaylistName={playlist.name}
          playlistId={playlist.id}
        />
      )}
    </>
  )
}

export default EditPlaylistDropdown