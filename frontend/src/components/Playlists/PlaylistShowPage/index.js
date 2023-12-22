import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import { fetchPlaylist, getPlaylist } from "../../../store/playlists";
import "./PlaylistShowPage.css";
import PlaylistShowPageHeader from "./PlaylistShowPageHeader";
import SearchSongs from "./SearchSongs";
import { fetchSongs, getSongs } from "../../../store/songs";
import PlaylistSongListItem from "./PlaylistSongListItem";
import { playQueue } from "../../../store/playbar";

const PlaylistShowPage = () => {
  const dispatch = useDispatch();
  const { playlistId } = useParams();
  const playlist = useSelector(getPlaylist(playlistId));
  const playlistSongs = playlist?.playlistSongs;
  const currentUser = useSelector((state) => state.session.user);
  const songs = useSelector(getSongs);
  const [songsInThisPlaylist, setSongsInThisPlaylist] = useState([]);
  const [boolean, setBoolean] = useState(false);

  let array = [];

  useEffect(() => {
    dispatch(fetchPlaylist(playlistId));
  }, [dispatch, playlistId, songs]);

  useEffect(() => {
    setSongsInThisPlaylist([]);
    array = [];
    const theSongsInThisPlaylist = Object.values(songs)
      .map((song) => {
        playlistSongs?.forEach((playlistSongsId) => {
          if (playlistSongsId[0] === song.id) {
            song.playlistSongId = playlistSongsId[1];
            song.playlistId = playlistId;
            array.push(song.id);
          }
        });
        return song;
      })
      .filter(
        (song) =>
          song.playlistSongId &&
          song.playlistId === playlistId &&
          array.includes(song.id)
      );
    setSongsInThisPlaylist(theSongsInThisPlaylist);
  }, [dispatch, boolean, playlistId, playlistSongs, songs, playlist]);

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  // play playlist song logic
  const handlePlaylistSongClick = (songId) => {
    let currentQueueIdx = null
    let playlistQueue = []
    for (let i = 0; i < playlist.playlistSongs.length; i++) {
      playlistQueue.push(playlist.playlistSongs[i][0]);
      if (playlist.playlistSongs[i][0] === songId) {
        currentQueueIdx = i
      }
    }
    dispatch(playQueue(playlistQueue, currentQueueIdx));
  };

  if (!currentUser) return <Redirect to="/" />;

  return (
    <div className="playlistShowPage">
      {playlist && currentUser && (
        <PlaylistShowPageHeader playlist={playlist} currentUser={currentUser} />
      )}

      <hr />

      {playlist &&
        songsInThisPlaylist.map((song, idx) => (
          <PlaylistSongListItem
            key={song.id}
            song={song}
            songNum={idx + 1}
            playlist={playlist}
            playlistSongId={song.playlistSongId}
            boolean={setBoolean}
            artistName={song.artistName}
            onClick={() => handlePlaylistSongClick(song.id)}
          />
        ))}
      <SearchSongs />
    </div>
  );
};

export default PlaylistShowPage;
