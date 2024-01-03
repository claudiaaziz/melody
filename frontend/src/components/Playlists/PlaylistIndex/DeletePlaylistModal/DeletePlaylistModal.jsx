import React from "react";
import "./DeletePlaylistModal.css";

const DeletePlaylistModal = ({ playlist, onCancel, onDelete, setShowDeletePlaylistModal }) => {


  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("deletePlaylistModalOverlay")) onCancel();
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
          <button className="deletePlaylistDeleteBtn" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePlaylistModal;