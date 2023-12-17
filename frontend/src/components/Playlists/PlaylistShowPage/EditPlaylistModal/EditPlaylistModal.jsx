import React, { useState } from "react";
import "./EditPlaylistModal.css"
import { updatePlaylist } from "../../../../store/playlists";
import { useDispatch } from "react-redux";
import { ReactComponent as CloseIcon } from "../../../../static/LogoAndSVGS/close.svg";
import { ReactComponent as ErrorIcon } from "../../../../static/LogoAndSVGS/sessions/error.svg";

const EditPlaylistModal = ({ playlistId, onClose, currentPlaylistName }) => {
  const dispatch = useDispatch();
  const [newPlaylistName, setNewPlaylistName] = useState(currentPlaylistName);
  const [error, setError] = useState(null);

  const handleNameChange = (e) => {
    setNewPlaylistName(e.target.value);
    setError(e.target.value === "" ? "Playlist name is required." : null);
  };

  const updatePlaylistName = () => {
    if (newPlaylistName === "") {
      setError("Playlist name is required.");
    } else {
      dispatch(updatePlaylist({ id: playlistId, name: newPlaylistName }));
      onClose();
    }
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
        {error && <div className="playlist-name-error"><ErrorIcon /> {error}</div>}
        <input
          type="text"
          value={newPlaylistName}
          onChange={handleNameChange}
        />
        <button
          disabled={error}
          className="updatePlaylistName"
          onClick={updatePlaylistName}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditPlaylistModal;
