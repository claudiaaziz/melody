import React, { useEffect, useState } from "react";
import { ReactComponent as DotsIcon } from "../../../../static/svgs/dots.svg";
import { ReactComponent as EditPlaylistIcon } from "../../../../static/svgs/playlists/editPlaylist.svg";
import { ReactComponent as DeletePlaylistIcon } from "../../../../static/svgs/playlists/delete.svg";
import EditPlaylistModal from "./EditPlaylistModal"; 
import "./PlaylistMenu.css"

const PlaylistMenu = ({playlist}) => {
  const [isPlaylistMenuOpen, setIsPlaylistMenuOpen] = useState(false);
  const togglePlaylistMenu = () => setIsPlaylistMenuOpen(!isPlaylistMenuOpen);
  const closePlaylistMenu = () => setIsPlaylistMenuOpen(false);

  // close menu if user clicks off 
  useEffect(() => {
    const handleClickOutside = () => isPlaylistMenuOpen && closePlaylistMenu();
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isPlaylistMenuOpen]);
  
  // edit modal
  const [isEditPlaylistModalOpen, setIsEditPlaylistModalOpen] = useState(false);
  const openEditPlaylistModal = () => {
    setIsEditPlaylistModalOpen(true);
    setIsPlaylistMenuOpen(false); 
  };
  const closeEditPlaylistModal = () => setIsEditPlaylistModalOpen(false);

  return (
    <>
      <DotsIcon className="dotsIcon" onClick={togglePlaylistMenu} />
      {isPlaylistMenuOpen && (
        <ul className="playlist-menu">
          <li onClick={openEditPlaylistModal} >
            <EditPlaylistIcon />
            <p>Edit playlist name</p>
          </li>
          <li>
              <DeletePlaylistIcon />
              <p>Delete</p>
          </li>
        </ul>
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

export default PlaylistMenu