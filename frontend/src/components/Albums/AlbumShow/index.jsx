import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAlbum } from "../../../store/albums.js";
import "./AlbumShow.css";
import { getSongs } from "../../../store/songs.js";
import { playQueue } from "../../../store/playbar.js";
import AlbumSongListItem from "./AlbumSongListItem/AlbumSongListItem.jsx";
import AlbumShowHeader from "./AlbumShowHeader.jsx";
import SignUpModal from "../../SignupAndLogin/SignUpModal/index.jsx";

const AlbumShow = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);

  const { albumId } = useParams();
  const album = useSelector(getAlbum(albumId));
  const songs = useSelector(getSongs);
  const albumSongs = album?.albumSongs?.map((songId) => songs[songId]);

  const [showSignUpModal, setShowSignUpModal] = useState(false);

  // play album songs
  const handleAlbumSongClick = (songId) => {
    if (currentUser) {
      const currentQueueIdx = album.albumSongs.indexOf(songId)
      dispatch(playQueue(album.albumSongs, currentQueueIdx));
    } else {
      setShowSignUpModal(true);
    }
  };

  return (
    <div className="albumShowPage">
      {album && <AlbumShowHeader album={album} />}

      <hr />

        {album &&
          albumSongs
            // .filter((song) => song) // filter out undefined songs (for testing 15)
            .map((song, idx) => (
              <AlbumSongListItem
                key={song.id}
                song={song}
                songNum={idx + 1}
                artistName={album.artistName}
                onClick={() => handleAlbumSongClick(song.id)}
              />
            ))}
        {showSignUpModal && (
          <SignUpModal onClose={() => setShowSignUpModal(false)} />
        )}
      </div>
  );
};

export default AlbumShow;
