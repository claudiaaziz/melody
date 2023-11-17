export const PLAY_SONG = "PLAY_SONG";
export const PAUSE_SONG = "PAUSE_SONG";
// export const RESTART_SONG = "RESTART_SONG";
export const REWIND_SONG = "REWIND_SONG";
export const SKIP_SONG = "SKIP_SONG";

export const SET_VOLUME = "SET_VOLUME";

export const playSong = (song) => ({
  type: PLAY_SONG,
  song,
});

export const pauseSong = () => ({
  type: PAUSE_SONG,
});

export const setVolume = (volume) => ({
  type: SET_VOLUME,
  volume,
});

export const rewindSong = () => ({
  type: REWIND_SONG,
});

export const skipSong = () => ({
  type: SKIP_SONG,
});

const playbarReducer = (state = {}, action) => {
  switch (action.type) {
    case PLAY_SONG:
      return { ...state, isPlaying: true, currentSong: action.song };
    case PAUSE_SONG:
      return { ...state, isPlaying: false };
    case SET_VOLUME:
      return { ...state, volume: action.volume };
    // case REWIND_SONG:

    // case SKIP_SONG:

    default:
      return state;
  }
};

export default playbarReducer;
