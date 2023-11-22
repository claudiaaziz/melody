import csrfFetch from "./csrf";
import {REMOVE_CURRENT_USER} from "./session"

export const RECEIVE_PLAYLISTS = `RECEIVE_PLAYLISTS`;
export const RECEIVE_PLAYLIST = `RECEIVE_PLAYLIST`;
export const REMOVE_PLAYLIST = `REMOVE_PLAYLIST`;

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

export const getPlaylists = (state) =>
  state?.playlists ? state.playlists : [];

export const getPlaylist = (playlistId) => (state) =>
  state.playlists ? state.playlists[playlistId] : null;

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


const playlistsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return { ...action.playlists };
    case RECEIVE_PLAYLIST:
      return { ...state, [action.playlist.id]: action.playlist };
    case REMOVE_PLAYLIST:
      const newState = { ...state };
      delete newState[action.playlistId];
      return newState;
    case REMOVE_CURRENT_USER:
      return {}
    default:
      return state;
  }
};

export default playlistsReducer;
