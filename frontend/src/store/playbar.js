import { REMOVE_CURRENT_USER } from "./session";

export const SET_VOLUME = "SET_VOLUME";
export const PLAY_QUEUE = "PLAY_QUEUE";
export const PLAY_PREV = "PLAY_PREV";
export const PLAY_NEXT = "PLAY_NEXT";
export const PAUSE_SONG = "PAUSE_SONG";
export const PLAY_SONG = "PLAY_SONG";
export const UPDATE_PROGRESS = "UPDATE_PROGRESS";

export const setVolume = (volume) => ({
  type: SET_VOLUME,
  volume,
});

export const playQueue = (songs, currentQueueIdx) => ({
  type: PLAY_QUEUE,
  songs,
  currentQueueIdx,
});

export const playPrev = () => ({
  type: PLAY_PREV
})

export const playNext = () => ({
  type: PLAY_NEXT
})

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
  currentQueueIdx: null,
  progress: 0,
  queue: []
};

const playbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VOLUME:
      return { ...state, volume: action.volume };
    case PLAY_QUEUE:
      return {
        ...state,
        queue: action.songs,
        isPlaying: true,
        currentQueueIdx: action.currentQueueIdx,
      };
    case PLAY_NEXT:
      const newIdx = (state.currentQueueIdx + 1) % state.queue?.length;
      return { ...state, currentQueueIdx: newIdx };
    case PLAY_PREV:
      const newSongIdx =
        (state.currentQueueIdx - 1 + state.queue?.length) % state.queue?.length;
      return { ...state, currentQueueIdx: newSongIdx };
    case PAUSE_SONG:
      return { ...state, isPlaying: false };
    case PLAY_SONG:
      return { ...state, isPlaying: true };
    case UPDATE_PROGRESS:
      return { ...state, progress: action.progress };
    case REMOVE_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default playbarReducer;
