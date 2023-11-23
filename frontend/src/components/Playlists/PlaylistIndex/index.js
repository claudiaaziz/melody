import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePlaylist, getPlaylists } from "../../../store/playlists";
import "./PlaylistIndex.css";
import playlistCover from "../../../static/images/playlistCover.png";
import { ReactComponent as DotsIcon } from "../../../static/LogoAndSVGS/dots.svg";
import { useHistory } from "react-router-dom";

const PlaylistIndex = () => {
  const playlists = useSelector(getPlaylists);
  const sortedPlaylists = Object.values(playlists).sort((a, b) => b.id - a.id);
  const currentUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(null);
  const selectedPlaylist = Object.values(playlists).find(
    (playlist) => playlist.id === selectedPlaylistId
  );

  const handleDeletePlaylist = async (playlistId) => {
    await dispatch(deletePlaylist(playlistId));
    setShowDeleteModal(false);
    history.push("/");
  };

  return (
    <div>
      <ul className="playlistList">
        {sortedPlaylists.map((playlist, idx) => (
          <li key={playlist.id}>
            <NavLink
              to={`/playlists/${playlist.id}`}
              className="playlistListItem"
              activeClassName="activePlaylistItem"
            >
              <img src={playlistCover} alt="" className="playlistCover"></img>
              <div className="playlistContent">
                <div className="playlistName">{playlist.name}</div>
                <div className="username">{currentUser?.username}</div>
              </div>
              <DotsIcon
                className="dotsIcon"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedPlaylistId(playlist.id);
                  setShowDeleteModal(true);
                }}
              />
            </NavLink>
          </li>
        ))}
      </ul>

      {showDeleteModal && (
        <div className="deleteModalContainer">
          <div className="deleteModal">
            <h2 className="deleteModalBold ">Delete from Your Library?</h2>
            <p className="deleteModalWarning">
              This will delete
              <span className="deleteModalBold">
                {selectedPlaylist && ` ${selectedPlaylist.name} `}
              </span>
              from <span className="deleteModalBold">Your Library.</span>
            </p>
            <div className="deleteModalBtns">
              <button
                className="cancelBtn"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
              <button
                className="deleteBtn"
                onClick={() => handleDeletePlaylist(selectedPlaylistId)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlaylistIndex;
