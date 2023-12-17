import { RECEIVE_ALBUM } from "./albums";

export const RECEIVE_SONGS = "posts/RECEIVE_SONGS";

const receiveSongs = (songs) => ({
  type: RECEIVE_SONGS,
  songs,
});

export const getSongs = (state) => (state.songs ? state.songs : []);

export const fetchSongs = () => async (dispatch) => {
  const res = await fetch("/api/songs");
  const songs = await res.json();
  dispatch(receiveSongs(songs));
};


const songsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SONGS:
      return { ...action.songs };
    case RECEIVE_ALBUM:
      return { ...state, ...action.album.songs };
    default:
      return state;
  }
};

export default songsReducer;
