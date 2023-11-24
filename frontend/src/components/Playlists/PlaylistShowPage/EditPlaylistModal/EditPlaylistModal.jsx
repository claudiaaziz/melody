import React, { useState } from "react";
import "./EditPlaylistModal.css"
import { updatePlaylist } from "../../../../store/playlists";
import { useDispatch } from "react-redux";

const EditPlaylistModal = ({ playlistId, onClose, currentPlaylistName }) => {
  const dispatch = useDispatch()
  const [newPlaylistName, setNewPlaylistName] = useState(currentPlaylistName);

  const handleNameChange = (e) => {
    setNewPlaylistName(e.target.value);
  };

  const updatePlaylistName = async () => {
    await dispatch(updatePlaylist({ id: playlistId, name: newPlaylistName }));
    onClose();
  };


  return (
    <div className="editPlaylistModalOverlay">
      <div className="editPlaylistModal">
        <div className="editPlaylistModalHeader">
          <h3>Edit Details</h3>
          <button onClick={onClose}>X</button>
        </div>
          <label htmlFor="playlistName">Name:</label>
          <input
            type="text"
            id="playlistName"
            value={newPlaylistName}
            onChange={handleNameChange}
          />
          <button onClick={updatePlaylistName}>Save</button>
      </div>
    </div>
  );
};

export default EditPlaylistModal;
