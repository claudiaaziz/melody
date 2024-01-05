import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deletePlaylistSong } from '../../../../../store/playlists';
import { ReactComponent as DotsIcon } from "../../../../../static/svgs/dots.svg";
import { ReactComponent as TrashIcon } from "../../../../../static/svgs/playlists/removeSong.svg";

const DeletePlaylistSong = ({handleMouseLeave, handleMouseEnter, playlistSongId, playlist}) => {
  // console.log('🦋🦋🦋 ~ playlistSongId:', playlistSongId); works

  const dispatch = useDispatch();
  const [isDeleteSongDropdownOpen, setIsDeleteSongDropdownOpen] = useState(false);

  const toggleDeleteSongDropdown = (e) => {
    e.stopPropagation();
    setIsDeleteSongDropdownOpen(!isDeleteSongDropdownOpen);
  };
  
  console.log('🦋🦋🦋 ~ playlistSongId:', playlistSongId); // undefined sometimes sometimes not
  const handleDeletePlaylistSong = () => {
    dispatch(deletePlaylistSong(playlistSongId, playlist.id))
    setIsDeleteSongDropdownOpen(false)
  }

  return (
    <>
      <DotsIcon className="dotsIcon" onClick={toggleDeleteSongDropdown} />
      {isDeleteSongDropdownOpen && (
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