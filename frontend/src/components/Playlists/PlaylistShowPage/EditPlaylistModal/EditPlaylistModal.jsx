import React, { useState } from "react";
import "./EditPlaylistModal.css"
import { updatePlaylist } from "../../../../store/playlists";
import { useDispatch } from "react-redux";
import { ReactComponent as CloseIcon } from "../../../../static/LogoAndSVGS/close.svg";

const EditPlaylistModal = ({ playlistId, onClose, currentPlaylistName }) => {
  const dispatch = useDispatch()
  const [newPlaylistName, setNewPlaylistName] = useState(currentPlaylistName);

  const handleNameChange = (e) => {
    setNewPlaylistName(e.target.value);
  };

  const updatePlaylistName = () => {
    dispatch(updatePlaylist({ id: playlistId, name: newPlaylistName }));
    onClose();
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("editPlaylistModalOverlay")) onClose();
  };

  return (
    <div className="editPlaylistModalOverlay" onClick={handleOutsideClick}>
      <div className="editPlaylistModal">
        <div className="editPlaylistModalHeader">
          <h3>Edit playlist name</h3>
          <button onClick={onClose} className="closeEditPlaylistModal">
            <CloseIcon />
          </button>
        </div>
          <input
            type="text"
            value={newPlaylistName}
            onChange={handleNameChange}
          />
          <button disabled={newPlaylistName === ""} className="updatePlaylistName" onClick={updatePlaylistName}>Save</button>
      </div>
    </div>
  );
};

export default EditPlaylistModal;