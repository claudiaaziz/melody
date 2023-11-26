import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deletePlaylist, getPlaylists } from "../../../store/playlists";
import PlaylistIndexItem from "./PlaylistIndexItem";
import DeletePlaylistModal from "./DeletePlaylistModal/DeletePlaylistModal";
import "./PlaylistIndex.css";

const PlaylistIndex = () => {
  const playlists = useSelector(getPlaylists);
  const sortedPlaylists = Object.values(playlists).sort((a, b) => b.id - a.id);
  const currentUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const [showDeletePlaylistModal, setShowDeletePlaylistModal] = useState(false);
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(null);

  const selectedPlaylist = Object.values(playlists).find(
    (playlist) => playlist.id === selectedPlaylistId
  );

  const handleDeletePlaylist = async (playlistId) => {
    await dispatch(deletePlaylist(playlistId));
    setShowDeletePlaylistModal(false);
    history.push("/");
  };

  return (
    <div>
      <ul className="playlistIndex">
        {sortedPlaylists.map((playlist) => (
          <PlaylistIndexItem
            key={playlist.id}
            playlist={playlist}
            currentUser={currentUser}
            onDotsClick={(playlistId) => {
              setSelectedPlaylistId(playlistId);
              setShowDeletePlaylistModal(true);
            }}
          />
        ))}
      </ul>

      {showDeletePlaylistModal && (
        <DeletePlaylistModal
          selectedPlaylist={selectedPlaylist}
          onCancel={() => setShowDeletePlaylistModal(false)}
          onDelete={() => handleDeletePlaylist(selectedPlaylistId)}
        />
      )}
    </div>
  );
};

export default PlaylistIndex;
