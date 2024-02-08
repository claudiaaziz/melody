import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./DeletePlaylistModal.css";
import { deletePlaylist } from "../../../../../store/playlists";

const DeletePlaylistModal = ({ playlist, onCancel }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOutsideClick = (e) => e.target.classList.contains("deletePlaylistModalOverlay") && onCancel();

  const handleDeletePlaylist = async (playlistId) => {
    await dispatch(deletePlaylist(playlistId));
    history.push("/");
  };

  return (
    <div className="deletePlaylistModalOverlay" onClick={handleOutsideClick}>
      <div className="deletePlaylistModal">
        <h2 className="bold">Delete from Your Library?</h2>
        <p className="deletePlaylistWarning">
          This will delete
          <span className="bold">{playlist && ` ${playlist.name} `}</span>
          from <span className="bold">Your Library.</span>
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