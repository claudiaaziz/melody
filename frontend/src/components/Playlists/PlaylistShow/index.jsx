import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import { fetchPlaylist, getPlaylist } from "../../../store/playlists";
import "./PlaylistShow.css";
import PlaylistShowPageHeader from "./PlaylistShowHeader";
import SearchSongs from "./SearchSongs";
import { fetchSongs, getSongs } from "../../../store/songs";
import PlaylistSongListItem from "./PlaylistSongListItem/PlaylistSongListItem";
import { playQueue } from "../../../store/playbar";
import { fetchAlbums } from "../../../store/albums";

const PlaylistShow = () => {
  const dispatch = useDispatch();
  const { playlistId } = useParams();
  const playlist = useSelector(getPlaylist(playlistId));
  const playlistSongs = playlist?.playlistSongs;
  const currentUser = useSelector((state) => state.session.user);
  const songs = useSelector(getSongs);
  const [songsInThisPlaylist, setSongsInThisPlaylist] = useState([]);

  
  useEffect(() => {
    dispatch(fetchPlaylist(playlistId));
  }, [dispatch, playlistId, songs]);


  useEffect(() => {
    setSongsInThisPlaylist(playlistSongs)
  }, [playlistSongs])
  

  
  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  // play playlist song logic
  // const handlePlaylistSongClick = (songId) => {
  //   let currentQueueIdx = null
  //   let playlistQueue = []
  //   for (let i = 0; i < playlist.playlistSongs.length; i++) {
  //     playlistQueue.push(playlist.playlistSongs[i][0]);
  //     if (playlist.playlistSongs[i][0] === songId) {
  //       currentQueueIdx = i
  //     }
  //   }
  //   dispatch(playQueue(playlistQueue, currentQueueIdx));
  // };

  if (!currentUser) return <Redirect to="/" />;

  return (
    <div className="playlistShowPage">
      {playlist && currentUser && (
        <PlaylistShowPageHeader playlist={playlist} currentUser={currentUser} />
      )}

      <hr />

      {playlist &&
        songsInThisPlaylist?.map(({playlistSongId, songId}, idx) => (
          <PlaylistSongListItem
            key={playlistSongId}
            songId={songId}
            songNum={idx + 1}
            playlist={playlist}
            playlistSongId={playlistSongId}
            // onClick={() => handlePlaylistSongClick(song.id)}
          />
        ))}
      <SearchSongs />
    </div>
  );
};

export default PlaylistShow;
