import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import { fetchPlaylist, getPlaylist } from "../../../store/playlists";
import "./PlaylistShowPage.css";
import PlaylistShowPageHeader from "./PlaylistShowPageHeader";
import SearchSongs from "./SearchSongs";
import {
  fetchPlaylistSongs,
  getPlaylistSongs,
} from "../../../store/playlistSongs";
import { fetchSong, fetchSongs, getSong, getSongs } from "../../../store/songs";
import PlaylistShowPageSongListItem from "./PlaylistSongListItem";
import PlaylistSongListItem from "./PlaylistSongListItem";

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
    array = []
    const theSongsInThisPlaylist = Object.values(songs)
      .map((song) => {
        playlistSongs?.forEach((playlistSongsId) => {
          if (playlistSongsId[0] === song.id) {
            song.playlistSongId = playlistSongsId[1];
            song.playlistId = playlistId;
            array.push(song.id)
          }
        });
        return song;
      })
      .filter((song) => song.playlistSongId && song.playlistId === playlistId && array.includes(song.id));
    setSongsInThisPlaylist(theSongsInThisPlaylist);
  }, [dispatch, boolean, playlistId, playlistSongs, songs, playlist]);

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

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
            // artistName={song.artistName}
            // onClick={() => handleSongClick(song.id)}
          />
        ))}
      <SearchSongs />
    </div>
  );
};

export default PlaylistShowPage;
