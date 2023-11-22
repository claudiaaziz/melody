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
                onClick={() => {
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
            <div>Delete from Your Library?</div>
            <p>
              This will delete
              {selectedPlaylist && ` ${selectedPlaylist.name} `}
              from Your Library.
            </p>
            <button onClick={() => setShowDeleteModal(false)}>Cancel</button>
            <button onClick={() => handleDeletePlaylist(selectedPlaylistId)}>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlaylistIndex;
