import { REMOVE_CURRENT_USER } from "./session";

export const SET_VOLUME = "SET_VOLUME";
export const PLAY_QUEUE = "PLAY_QUEUE";
export const PAUSE_SONG = "PAUSE_SONG";
export const PLAY_SONG = "PLAY_SONG";
export const UPDATE_PROGRESS = "UPDATE_PROGRESS";

export const setVolume = (volume) => ({
  type: SET_VOLUME,
  volume,
});

export const playQueue = (songId, albumId) => ({
  type: PLAY_QUEUE,
  data: { songId, albumId },
});

export const pauseSong = () => ({
  type: PAUSE_SONG,
});

export const playSong = () => ({
  type: PLAY_SONG,
});

export const updateProgress = (progress) => ({
  type: UPDATE_PROGRESS,
  progress,
});

const initialState = {
  volume: 0.5,
  isPlaying: false,
  currentSongId: null,
  progress: 0,
};

const playbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VOLUME:
      return { ...state, volume: action.volume };
    case PLAY_QUEUE:
      return {
        ...state,
        isPlaying: true,
        currentSongId: action.data.songId,
        currentAlbumId: action.data.albumId,
      };
    case PAUSE_SONG:
      return { ...state, isPlaying: false };
    case PLAY_SONG:
      return { ...state, isPlaying: true };
    case UPDATE_PROGRESS:
      return { ...state, progress: action.progress };
    case REMOVE_CURRENT_USER:
      return {}
    default:
      return state;
  }
};

export default playbarReducer;
