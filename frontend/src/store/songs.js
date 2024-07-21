import { RECEIVE_ALBUM } from './albums';

export const RECEIVE_SONGS = 'posts/RECEIVE_SONGS';
export const RECEIVE_SONG = 'posts/RECEIVE_SONGS';

const receiveSongs = (songs) => ({
    type: RECEIVE_SONGS,
    songs,
});

export const receiveSong = (song) => ({
    type: RECEIVE_SONG,
    song,
});

export const getSongs = (state) => (state.songs ? state.songs : []);
export const getSong = (songId) => (state) =>
    state.songs ? state.songs[songId] : [];

export const fetchSongs = () => async (dispatch) => {
    const res = await fetch('/api/songs');
    const songs = await res.json();
    dispatch(receiveSongs(songs));
};

// export const fetchSong = () => (songId) => async (dispatch) => {
//   const res = await fetch(`/api/songs/${songId}`);
//   const song = await res.json();
//   dispatch(receiveSong(song));
// };

const songsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_SONGS:
            return { ...action.songs };
        // case RECEIVE_SONG:
        //   return { ...state, [action.song.song.id]: action.song.song };
        case RECEIVE_ALBUM:
            return { ...state, ...action.album.songs };
        default:
            return state;
    }
};

export default songsReducer;
