import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./PlaylistShowPage.css";
import { fetchPlaylist, getPlaylist } from "../../../store/playlists";
import newPlaylistCover from "../../../static/images/newPlaylistCover.png";
// import SongListItem from "./SongListItem";
// import { getSongs } from "../../../store/songs";
// import { playAlbumSong } from "../../../store/playbar";

const PlaylistShowPage = () => {
  const dispatch = useDispatch();
  const { playlistId } = useParams();
  const playlist = useSelector(getPlaylist(playlistId));
  const currentUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(fetchPlaylist(playlistId));
  }, [dispatch, playlistId]);

  // const handleSongClick = (songId) => {
  //   if (currentUser) {
  //     dispatch(playAlbumSong(songId, playlistId));
  //   } else {
  //     setShowSignUpModal(true);
  //   }
  // };

  return (
    <div className="playlistShowPage">
      {playlist ? (
        <div className="playlistShowHeader">
          <img
            src={newPlaylistCover}
            alt=""
            className="playlistShowHeaderImg"
          />
          <div className="playlistDetails">
            <p>Playlist</p>
            <h2>{playlist.name}</h2>
            <div>
              <span>{currentUser.username}</span>
              {/* <span>‧</span> */}
              {/* <span>{album.releaseYear}</span>
              <span>‧</span> */}
              {/* <span>
                {allAlbumSongs ? Object.values(allAlbumSongs).length : 0} songs
              </span> */}
            </div>
          </div>
        </div>
      ) : undefined}
      <hr />
      {/* {playlist &&
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
      )} */}
    </div>
  );
};

export default PlaylistShowPage;
