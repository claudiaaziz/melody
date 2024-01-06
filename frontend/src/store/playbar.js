import { REMOVE_CURRENT_USER } from "./session";

export const PLAY_SONG = "PLAY_SONG";
export const PAUSE_SONG = "PAUSE_SONG";
export const PLAY_QUEUE = "PLAY_QUEUE";
export const PLAY_PREV = "PLAY_PREV";
export const PLAY_NEXT = "PLAY_NEXT";
export const UPDATE_VOLUME = "UPDATE_VOLUME";
export const UPDATE_PROGRESS = "UPDATE_PROGRESS";

export const playSong = () => ({
  type: PLAY_SONG,
});

export const pauseSong = () => ({
  type: PAUSE_SONG,
});

export const playQueue = (songs, currentQueueIdx) => ({
  type: PLAY_QUEUE,
  songs,
  currentQueueIdx,
});

export const playPrev = () => ({
  type: PLAY_PREV,
});

export const playNext = () => ({
  type: PLAY_NEXT,
});

export const updateVolume = (volume) => ({
  type: UPDATE_VOLUME,
  volume,
});

export const updateProgress = (progress) => ({
  type: UPDATE_PROGRESS,
  progress,
});

const initialState = {
  volume: 0.5,
  isPlaying: false,
  currentQueueIdx: null,
  progress: 0,
  queue: [],
};

const playbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_SONG:
      return { ...state, isPlaying: true };
    case PAUSE_SONG:
      return { ...state, isPlaying: false };
    case PLAY_QUEUE:
      return {
        ...state,
        queue: action.songs,
        isPlaying: true,
        currentQueueIdx: action.currentQueueIdx,
      };
    case PLAY_PREV:
      const newSongIdx =
        (state.currentQueueIdx - 1 + state.queue?.length) % state.queue?.length;
      return { ...state, currentQueueIdx: newSongIdx };
    case PLAY_NEXT:
      const newIdx = (state.currentQueueIdx + 1) % state.queue?.length;
      return { ...state, currentQueueIdx: newIdx };
    case UPDATE_VOLUME:
      return { ...state, volume: action.volume };
    case UPDATE_PROGRESS:
      return { ...state, progress: action.progress };
    case REMOVE_CURRENT_USER:
      return initialState;
    default:
      return state;
  }
};

export default playbarReducer;
