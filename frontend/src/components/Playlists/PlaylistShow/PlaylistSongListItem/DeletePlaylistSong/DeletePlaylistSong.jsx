import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deletePlaylistSong } from '../../../../../store/playlists';
import { ReactComponent as DotsIcon } from "../../../../../static/svgs/dots.svg";
import { ReactComponent as TrashIcon } from "../../../../../static/svgs/playlists/removeSong.svg";

const DeletePlaylistSong = ({handleMouseLeave, handleMouseEnter, playlistSongId, playlist}) => {
  const dispatch = useDispatch();

  const toggleDeleteSong = () => setIsDeleteSongOpen(!isDeleteSongOpen);
  const [isDeleteSongOpen, setIsDeleteSongOpen] = useState(false);

  const handleDeletePlaylistSong = () => {
    dispatch(deletePlaylistSong(playlistSongId, playlist.id));
  };

  return (
    <>
      <DotsIcon className="dotsIcon" onClick={toggleDeleteSong} />
      {isDeleteSongOpen && (
        <div
          className="remove-playlist-song-dropdown"
          onClick={handleDeletePlaylistSong}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="removeSong">
            <TrashIcon />
            <p>Remove from this playlist</p>
          </div>
        </div>
      )}
    </>
  )
}

export default DeletePlaylistSong