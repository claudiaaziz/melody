import { useEffect, useState } from "react";
import { ReactComponent as DotsIcon } from "../../../../static/svgs/dots.svg";
import { ReactComponent as EditPlaylistIcon } from "../../../../static/svgs/playlists/editPlaylist.svg";
import { ReactComponent as DeletePlaylistIcon } from "../../../../static/svgs/playlists/delete.svg";
import EditPlaylistModal from "./EditPlaylistModal"; 
import "./PlaylistMenu.css"
import DeletePlaylistModal from "./DeletePlaylistModal";

const PlaylistMenu = ({playlist}) => {
  const [isPlaylistMenuOpen, setIsPlaylistMenuOpen] = useState(false);
  const openPlaylistMenu = () => setIsPlaylistMenuOpen(true);
  const closePlaylistMenu = () => setIsPlaylistMenuOpen(false);

  // close menu if user clicks off 
  useEffect(() => {
    if (!isPlaylistMenuOpen) return;
    document.addEventListener("click", closePlaylistMenu);
    return () => document.removeEventListener("click", closePlaylistMenu);
  }, [isPlaylistMenuOpen]);
  
  const [isEditPlaylistModalOpen, setIsEditPlaylistModalOpen] = useState(false);
  const [isDeletePlaylistModalOpen, setIsDeletePlaylistModalOpen] = useState(false);

  return (
    <>
      <DotsIcon className="dotsIcon" onClick={openPlaylistMenu} />
      {isPlaylistMenuOpen && (
        <ul className="playlist-menu">
          <li onClick={() => setIsEditPlaylistModalOpen(true)} >
            <EditPlaylistIcon />
            <p>Edit playlist name</p>
          </li>
          <li onClick={() => setIsDeletePlaylistModalOpen(true)}>
              <DeletePlaylistIcon />
              <p>Delete playlist</p>
          </li>
        </ul>
      )}
      
      {isEditPlaylistModalOpen && (
        <EditPlaylistModal
          playlist={playlist}
          onCancel={() => setIsEditPlaylistModalOpen(false)}
        />
      )}

      {isDeletePlaylistModalOpen && (
        <DeletePlaylistModal
          playlist={playlist}
          onCancel={() => setIsDeletePlaylistModalOpen(false)}
        />
      )}
    </>
  )
}

export default PlaylistMenu