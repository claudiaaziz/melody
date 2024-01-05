import csrfFetch from "./csrf";
import {REMOVE_CURRENT_USER} from "./session"
import {merge} from "lodash"

export const RECEIVE_PLAYLISTS = `RECEIVE_PLAYLISTS`;
export const RECEIVE_PLAYLIST = `RECEIVE_PLAYLIST`;
export const REMOVE_PLAYLIST = `REMOVE_PLAYLIST`;
export const ADD_SONG_TO_PLAYLIST = `ADD_SONG_TO_PLAYLIST`;
export const REMOVE_SONG_FROM_PLAYLIST = `REMOVE_SONG_FROM_PLAYLIST`;

const receivePlaylists = (playlists) => ({
  type: RECEIVE_PLAYLISTS,
  playlists,
});

const receivePlaylist = (playlist) => ({
  type: RECEIVE_PLAYLIST,
  playlist,
});

const removePlaylist = (playlistId) => ({
  type: REMOVE_PLAYLIST,
  playlistId,
});

const addSongToPlaylist = (playlistSong) => ({
  type: ADD_SONG_TO_PLAYLIST,
  playlistSong,
});

const removeSongFromPlaylist = (playlistSongId, playlistId) => ({
  type: REMOVE_SONG_FROM_PLAYLIST,
  playlistSongId,
  playlistId,
});

export const getPlaylists = (state) =>
  state?.playlists ? state.playlists : [];

export const getPlaylist = (playlistId) => (state) =>
  state.playlists ? state.playlists[playlistId] : {};

export const fetchPlaylists = () => async (dispatch) => {
  const res = await fetch("/api/playlists");

  if (res.ok) {
    const playlists = await res.json();
    dispatch(receivePlaylists(playlists));
  }
};

export const fetchPlaylist = (playlistId) => async (dispatch) => {
  const res = await fetch(`/api/playlists/${playlistId}`);
  if (res.ok) {
    const playlist = await res.json();
    dispatch(receivePlaylist(playlist));
  }
};

export const createPlaylist = (playlist) => async (dispatch) => {
  try {
    const res = await csrfFetch("/api/playlists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playlist),
    });

    if (!res.ok) {
      throw res;
    }

    const createdPlaylist = await res.json();
    dispatch(receivePlaylist(createdPlaylist));
    return createdPlaylist;
  } catch (error) {
    console.error("Error creating playlist:", error);
    return null;
  }
};

export const updatePlaylist = (playlist) => async (dispatch) => {
  const res = await csrfFetch(`/api/playlists/${playlist.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(playlist),
  });

  if (res.ok) {
    const updatedPlaylist = await res.json();
    dispatch(receivePlaylist(updatedPlaylist));
  }
};

export const deletePlaylist = (playlistId) => async (dispatch) => {
  const res = await csrfFetch(`/api/playlists/${playlistId}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(removePlaylist(playlistId));
  } 
};

export const createPlaylistSong = (songId, playlistId) => async (dispatch) => {
  try {
    const res = await csrfFetch("/api/playlist_songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ playlistSong: { songId, playlistId } }),
    });

    if (!res.ok) {
      throw res;
    }

    const createdPlaylistSong = await res.json();
    dispatch(addSongToPlaylist(createdPlaylistSong));
    return createdPlaylistSong;
  } catch (error) {
    console.error("Error creating playlist song:", error);
    return null;
  }
};

export const deletePlaylistSong = (playlistSongId, playlistId) => async (dispatch) => {
  const res = await csrfFetch(`/api/playlist_songs/${playlistSongId}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(removeSongFromPlaylist(playlistSongId, playlistId));
  }
};

const playlistsReducer = (state = {}, action) => {
  let newState = merge({}, state)
  
  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return { ...action.playlists };
    case RECEIVE_PLAYLIST:
      return {
        ...state,
        [action.playlist.id]: action.playlist,
      };
    case REMOVE_PLAYLIST:
      delete newState[action.playlistId];
      return newState;
    case REMOVE_SONG_FROM_PLAYLIST:
      return newState
    //   let indexToDelete = null;
    //   for (
    //     let i = 0;
    //     i < newState[action.playlistId].playlistSongs.length;
    //     i++
    //   ) {
    //     let array = newState[action.playlistId].playlistSongs[i];
    //     if (array && array[1] === action.playlistSongId) {
    //       indexToDelete = i;
    //       break;
    //     }
    //   }
    //   newState[action.playlistId].playlistSongs = newState[
    //     action.playlistId
    //   ].playlistSongs
    //     .slice(0, indexToDelete)
    //     .concat(
    //       newState[action.playlistId].playlistSongs.slice(indexToDelete + 1)
    //     );
    //   return newState;
    case ADD_SONG_TO_PLAYLIST:
      newState[action.playlistSong.playlistId].playlistSongs[
        state[action.playlistSong.playlistId].playlistSongs
      .length] = action.playlistSong;
      return newState
    case REMOVE_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default playlistsReducer;