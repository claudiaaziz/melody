import csrfFetch from './csrf';
import { REMOVE_CURRENT_USER } from './session';
import { merge } from 'lodash';
import { closeModal } from './ui';

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
    const res = await fetch('/api/playlists');

    if (res.ok) {
        const playlists = await res.json();
        dispatch(receivePlaylists(playlists));
    }
};

export const fetchPlaylist = (playlistId, history) => async (dispatch) => {
    const res = await fetch(`/api/playlists/${playlistId}`);

    if (res.ok) {
        const playlist = await res.json();
        dispatch(receivePlaylist(playlist));
    } else {
        history.push('/page-not-found');
    }
};

export const createPlaylist = (playlist) => async (dispatch) => {
    const res = await csrfFetch('/api/playlists', {
        method: 'POST',
        body: JSON.stringify(playlist),
    });

    const createdPlaylist = await res.json();
    dispatch(receivePlaylist(createdPlaylist));
    return createdPlaylist;
};

export const updatePlaylist = (playlist) => async (dispatch) => {
    const res = await csrfFetch(`/api/playlists/${playlist.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(playlist),
    });

    const updatedPlaylist = await res.json();

    if (res.ok) {
        dispatch(receivePlaylist(updatedPlaylist));
        dispatch(closeModal());
    }
};

export const deletePlaylist = (playlistId) => async (dispatch) => {
    const res = await csrfFetch(`/api/playlists/${playlistId}`, {
        method: 'DELETE',
    });

    if (res.ok) dispatch(removePlaylist(playlistId));
};

export const createPlaylistSong = (songId, playlistId) => async (dispatch) => {
    const res = await csrfFetch('/api/playlist_songs', {
        method: 'POST',
        body: JSON.stringify({ playlistSong: { songId, playlistId } }),
    });

    const createdPlaylistSong = await res.json();

    dispatch(
        addSongToPlaylist({
            songId: createdPlaylistSong.songId,
            playlistSongId: createdPlaylistSong.id,
            playlistId,
        })
    );

    return createdPlaylistSong;
};

export const deletePlaylistSong = (playlistSongId, playlistId) => async (dispatch) => {
        const res = await csrfFetch(`/api/playlist_songs/${playlistSongId}`, {
            method: 'DELETE',
        });

        if (res.ok)
            dispatch(removeSongFromPlaylist(playlistSongId, playlistId));
    };

const playlistsReducer = (state = {}, action) => {
    let newState = merge({}, state);

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
            const getIdxOfPlaylistSongInPlaylistSongs = (playlistSongId) => {
                const playlistSongs = state[action.playlistId].playlistSongs;

                for (let i = 0; i < playlistSongs.length; i++) {
                    if (playlistSongs[i]?.playlistSongId === playlistSongId)
                        return i;
                }
            };

            const idxOfPlaylistSong = getIdxOfPlaylistSongInPlaylistSongs(
                action.playlistSongId
            );

            newState[action.playlistId].playlistSongs.splice(
                idxOfPlaylistSong,
                1
            );
            return newState;
        case ADD_SONG_TO_PLAYLIST:
            newState[action.playlistSong.playlistId].playlistSongs[
                state[action.playlistSong.playlistId].playlistSongs.length
            ] = action.playlistSong;
            return newState;
        case REMOVE_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default playlistsReducer;
