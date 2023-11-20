import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbum, getAlbum } from "../../store/albums";
import "./AlbumShowPage.css";
import { useParams } from "react-router-dom";
import SongListItem from "./SongListItem";
import { getSongs } from "../../store/songs";
import { playAlbumSong, setQueue } from "../../store/playbar";
import SignUpModal from "../SignupAndLogin/Modal";

const AlbumShowPage = () => {
  const dispatch = useDispatch();
  const { albumId } = useParams();
  const album = useSelector(getAlbum(albumId));
  const songs = useSelector(getSongs);
  const currentUser = useSelector((state) => state.session.user);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  useEffect(() => {
    dispatch(fetchAlbum(albumId));
  }, [dispatch, albumId]);

  const allAlbumSongs = album?.albumSongs
    ? album.albumSongs.map((songId) => songs[songId])
    : [];

  // play song logic
  const currentSongId = useSelector((state) => state.playbar.currentSongId);
  const currentSong = useSelector((state) => state.songs[currentSongId]);
  // debugger
  // const currentQueueAlbum = useSelector(getAlbum(currentSong?.albumId))
  const handleSongClick = (songId) => {
    if (currentUser) {
      // needs access to currentSongIdx
      dispatch(playAlbumSong(songId, albumId));
      // dispatch(setQueue(currentQueueAlbum));
    } else {
      setShowSignUpModal(true);
    }
  };

  return (
    <div className="albumShow">
      {album ? (
        <div className="albumShowHeader">
          <img src={album.albumCoverUrl} alt="" />
          <div className="albumDetails">
            <p>Album</p>
            <h2>{album.title}</h2>
            <div>
              <span>{album.artistName}</span>
              <span>‧</span>
              <span>{album.releaseYear}</span>
              <span>‧</span>
              <span>
                {allAlbumSongs ? Object.values(allAlbumSongs).length : 0} songs
              </span>
            </div>
          </div>
        </div>
      ) : undefined}

      <hr />

      {album &&
        Object.values(allAlbumSongs).map((song, idx) => (
          <SongListItem
            key={song.id}
            song={song}
            songNum={idx + 1}
            artistName={album.artistName}
            onClick={() => handleSongClick(song.id)}
          />
        ))}
      {showSignUpModal && (
        <SignUpModal onClose={() => setShowSignUpModal(false)} />
      )}
    </div>
  );
};

export default AlbumShowPage;
