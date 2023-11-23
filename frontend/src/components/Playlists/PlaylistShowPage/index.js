import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import { fetchPlaylist, getPlaylist } from "../../../store/playlists";
import "./PlaylistShowPage.css";
import PlaylistShowPageHeader from "./PlaylistShowPageHeader";
// import PlaylistShowPageSongListItem from "./PlaylistShowPageSongListItem";

const PlaylistShowPage = () => {
  const dispatch = useDispatch();
  const { playlistId } = useParams();
  const playlist = useSelector(getPlaylist(playlistId));
  const currentUser = useSelector((state) => state.session.user);
  if (!currentUser) return <Redirect to="/" />;

  // const handleSongClick = (songId) => {
  //  dispatch(playQueue(songId, playlistId));
  // };

  // useEffect(() => {
  //   dispatch(fetchPlaylist(playlistId));
  // }, [dispatch, playlistId]);

  return (
    <div className="playlistShowPage">
      {playlist && currentUser && (
        <PlaylistShowPageHeader playlist={playlist} currentUser={currentUser} />
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