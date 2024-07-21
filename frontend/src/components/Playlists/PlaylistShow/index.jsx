import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { fetchPlaylist, getPlaylist } from '../../../store/playlists';
import './PlaylistShow.css';
import PlaylistShowPageHeader from './PlaylistShowHeader';
import SearchSongs from './SearchSongs';
import { fetchSongs } from '../../../store/songs';
import PlaylistSongListItem from './PlaylistSongListItem/PlaylistSongListItem';
import { fetchAlbums } from '../../../store/albums';

const PlaylistShow = () => {
    const { playlistId } = useParams();

    const history = useHistory();
    const dispatch = useDispatch();

    const playlist = useSelector(getPlaylist(playlistId));
    const playlistSongs = playlist?.playlistSongs;

    useEffect(() => {
        dispatch(fetchPlaylist(playlistId, history));
    }, [dispatch, playlistId, history]);

    useEffect(() => {
        dispatch(fetchAlbums());
        dispatch(fetchSongs());
    }, [dispatch]);

    return (
        <div className='playlistShowPage'>
            {playlist && <PlaylistShowPageHeader playlist={playlist} />}

            <hr />

            {playlist &&
                playlistSongs?.length > 0 &&
                playlistSongs.map(({ playlistSongId, songId }, idx) => (
                    <PlaylistSongListItem
                        key={idx}
                        songId={songId}
                        songNum={idx + 1}
                        playlist={playlist}
                        playlistSongId={playlistSongId}
                        playlistSongs={playlistSongs}
                        idx={idx}
                    />
                ))}
            <SearchSongs />
        </div>
    );
};

export default PlaylistShow;
