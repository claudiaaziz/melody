import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPlaylist, getPlaylist } from "../../../store/playlists";
import "./PlaylistShowPage.css";
import playlistCover from "../../../static/images/playlistCover.png";
// import PlaylistShowPageSongListItem from "./PlaylistShowPageSongListItem";

const PlaylistShowPage = () => {
  const dispatch = useDispatch();
  const { playlistId } = useParams();
  const playlist = useSelector(getPlaylist(playlistId));
  const currentUser = useSelector((state) => state.session.user);

  // const handleSongClick = (songId) => {
  //  dispatch(playQueue(songId, playlistId));
  // };

  // useEffect(() => {
  //   dispatch(fetchPlaylist(playlistId));
  // }, [dispatch, playlistId]);

  return (
    <div className="playlistShowPage">
      {playlist && currentUser && (
        <div className="playlistShowHeader">
          <img src={playlistCover} alt="" className="playlistShowHeaderImg" />
          <div className="playlistDetails">
            <p>Playlist</p>
            <h2>{playlist.name}</h2>
            <div>
              <span>{currentUser.username}</span>
            </div>
          </div>
        </div>
      )}

      <hr />
      
      {/* {playlist &&
        Object.values(playlist.songs).map((song, idx) => (
          <PlaylistShowPageSongListItem
            key={song.id}
            song={song}
            songNum={idx + 1}
            artistName={song.artistName}
            onClick={() => handleSongClick(song.id)}
          />
        ))} */}
    </div>
  );
};

export default PlaylistShowPage;