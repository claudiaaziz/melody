import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAlbum, getAlbum } from "../../../store/albums.js";
import "./AlbumShow.css";
import { getSongs } from "../../../store/songs.js";
import { playQueue } from "../../../store/playbar.js";
import AlbumSongListItem from "./AlbumSongListItem/AlbumSongListItem.jsx";
import AlbumShowHeader from "./AlbumShowHeader.jsx";
import SignUpModal from "../../SignupAndLogin/SignUpModal/index.jsx";

const AlbumShow = () => {
  const dispatch = useDispatch();
  const { albumId } = useParams();
  const album = useSelector(getAlbum(albumId));
  const songs = useSelector(getSongs);
  const currentUser = useSelector((state) => state.session.user);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  useEffect(() => {
    dispatch(fetchAlbum(albumId));
  }, [dispatch, albumId]);

  const albumSongs = album?.albumSongs?.map((songId) => songs[songId]);

  // play album songs logic
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
            .filter((song) => song) // filter out undefined songs
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