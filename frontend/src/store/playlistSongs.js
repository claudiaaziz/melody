import csrfFetch from "./csrf";
import {fetchPlaylist} from "./playlists";
import { REMOVE_CURRENT_USER } from "./session";

export const RECEIVE_PLAYLIST_SONGS = `RECEIVE_PLAYLIST_SONGS`;
export const RECEIVE_PLAYLIST_SONG = `RECEIVE_PLAYLIST_SONG`;

const receivePlaylistSongs = (playlistSongs) => ({
  type: RECEIVE_PLAYLIST_SONGS,
  playlistSongs,
});

const receivePlaylistSong = (playlistSong) => ({
  type: RECEIVE_PLAYLIST_SONG,
  playlistSong,
});

export const getPlaylistSongs = (state) =>
  state?.playlistSongs ? state.playlistSongs : [];

export const getPlaylistSong = (playlistSongId) => (state) =>
  state.playlists ? state.playlistsSongs[playlistSongId] : null;

export const fetchPlaylistSongs = () => async (dispatch) => {
  const res = await fetch("/api/playlist_songs");

  if (res.ok) {
    const playlist_songs = await res.json();
    dispatch(receivePlaylistSongs(playlist_songs));
  }
};

export const fetchPlaylistSong = (playlistSongId) => async (dispatch) => {
  const res = await fetch(`/api/playlist_songs/${playlistSongId}`);

  if (res.ok) {
    const playlistSong = await res.json();
    dispatch(receivePlaylistSong(playlistSong));
  }
};

export const createPlaylistSong = (songId, playlistId) => async (dispatch) => {
  // console.log("fje", songId, playlistId)
  try {
    const res = await csrfFetch("/api/playlist_songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(songId, playlistId),
      body: JSON.stringify({ playlistSong: {songId, playlistId}})
    });

    if (!res.ok) {
      throw res;
    }

    const createdPlaylistSong = await res.json();
    dispatch(receivePlaylistSong(createdPlaylistSong));
    dispatch(fetchPlaylist(playlistId));
    return createdPlaylistSong;
  } catch (error) {
    console.error("Error creating playlist song:", error);
    return null;
  }
};

const playlistSongsReducer = (state = {}, action) => {
  switch (action.type) {
    // case RECEIVE_PLAYLIST_SONGS:
    //   return { ...action.playlistSongs };
    // case RECEIVE_PLAYLIST_SONG:
    //   return { ...state, [action.playlistSong.songId]: action.playlistSongs };
    case REMOVE_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default playlistSongsReducer;