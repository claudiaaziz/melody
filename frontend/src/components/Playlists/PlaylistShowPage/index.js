import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./PlaylistShowPage.css";
import { fetchPlaylist, getPlaylist } from "../../../store/playlists";
import playlistCover from "../../../static/images/playlistCover.png";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
// import SongListItem from "./SongListItem";
// import { getSongs } from "../../../store/songs";
// import { playQueue } from "../../../store/playbar";

const PlaylistShowPage = () => {
  const dispatch = useDispatch();
  const { playlistId } = useParams();
  const playlist = useSelector(getPlaylist(playlistId));
  const currentUser = useSelector((state) => state.session.user);

  // const handleSongClick = (songId) => {
  //   if (currentUser) {
  //     dispatch(playQueue(songId, playlistId));
  //   } else {
  //     setShowSignUpModal(true);
  //   }
  // };

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchPlaylist(playlistId));
    }
  }, [dispatch, currentUser, playlistId]);

  if (!currentUser) return <Redirect to="/" />;

  return (
    <div className="playlistShowPage">
      {playlist && currentUser ? (
        <div className="playlistShowHeader">
          <img src={playlistCover} alt="" className="playlistShowHeaderImg" />
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
