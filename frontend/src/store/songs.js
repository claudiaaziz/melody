import { RECEIVE_ALBUM } from "./albums";

export const getSongs = (state) => (state.songs ? state.songs : []);
export const getSong = (songId) => (state) => (state.songs ? state.songs[songId] : null);

const songsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALBUM:
      return { ...state, ...action.album.songs };
    default:
      return state;
  }
};

export default songsReducer;
