import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAlbum, getAlbum } from "../../../store/albums";
import "./AlbumShowPage.css";
import { getSongs } from "../../../store/songs";
import { playQueue } from "../../../store/playbar";
import AlbumShowPageHeader from "./AlbumShowPageHeader";
import AlbumSongListItem from "./AlbumSongListItem/AlbumSongListItem.jsx";
import SignUpModal from "../../SignupAndLogin/SignUpModal/index.js";

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

  const albumSongs = album?.albumSongs?.map((songId) => songs[songId]);

  // play album song logic
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
      {album && <AlbumShowPageHeader album={album} />}

      <hr />

      {/* <div id="album-song-list"> */}
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
    // </div>
  );
};

export default AlbumShowPage;
