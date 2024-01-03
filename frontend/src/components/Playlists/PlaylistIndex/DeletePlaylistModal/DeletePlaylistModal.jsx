import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./DeletePlaylistModal.css";
import { deletePlaylist } from "../../../../store/playlists";

const DeletePlaylistModal = ({ playlist, onCancel, setShowDeletePlaylistModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("deletePlaylistModalOverlay")) onCancel();
  };

  const handleDeletePlaylist = async (playlistId) => {
    await dispatch(deletePlaylist(playlistId));
    setShowDeletePlaylistModal(false);
    history.push("/");
  };

  return (
    <div className="deletePlaylistModalOverlay" onClick={handleOutsideClick}>
      <div className="deletePlaylistModal">
        <h2 className="deletePlaylistModalBold">Delete from Your Library?</h2>
        <p className="deletePlaylistModalWarning">
          This will delete
          <span className="deletePlaylistModalBold">{playlist && ` ${playlist.name} `}</span>
          from <span className="deletePlaylistModalBold">Your Library.</span>
        </p>
        <div className="deletePlaylistModalBtns">
          <button className="deletePlaylistCancelBtn" onClick={onCancel}>
            Cancel
          </button>
          <button className="deletePlaylistDeleteBtn" onClick={() => handleDeletePlaylist(playlist.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePlaylistModal;