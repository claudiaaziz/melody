export const SET_VOLUME = "SET_VOLUME";
export const PLAY_SONG = "PLAY_SONG";
export const PAUSE_SONG = "PAUSE_SONG";
export const PREVIOUS_SONG = "PREVIOUS_SONG";
export const SKIP_SONG = "SKIP_SONG";
export const UPDATE_PROGRESS = "UPDATE_PROGRESS";

export const setVolume = (volume) => ({
  type: SET_VOLUME,
  volume,
});

export const playSong = (songId) => ({
  type: PLAY_SONG,
  songId,
});

export const pauseSong = () => ({
  type: PAUSE_SONG,
});

export const previousSong = () => ({
  type: PREVIOUS_SONG,
});

export const skipSong = () => ({
  type: SKIP_SONG,
});

export const updateProgress = (progress) => ({
  type: UPDATE_PROGRESS,
  progress,
});

const playbarReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_VOLUME:
      return { ...state, volume: action.volume };
    case PLAY_SONG:
      return { ...state, isPlaying: true, currentSongId: action.songId };
    case PAUSE_SONG:
      return { ...state, isPlaying: false };
    case UPDATE_PROGRESS:
      return { ...state, progress: action.progress };
    // case PREVIOUS_SONG:

    // case SKIP_SONG:

    default:
      return state;
  }
};

export default playbarReducer;
