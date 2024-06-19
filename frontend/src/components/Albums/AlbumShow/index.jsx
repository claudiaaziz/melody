import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import AlbumSongListItem from './AlbumSongListItem/AlbumSongListItem.jsx';
import AlbumShowHeader from './AlbumShowHeader.jsx';
import { fetchAlbum, getAlbum } from '../../../store/albums.js';
import { getSongs } from '../../../store/songs.js';
import './AlbumShow.css';

const AlbumShow = () => {
    const { albumId } = useParams();

    const dispatch = useDispatch();
    const history = useHistory();

    const album = useSelector(getAlbum(albumId));
    const songs = useSelector(getSongs);
    const albumSongs = album?.albumSongs
        ?.map((songId) => songs[songId])
        .filter((song) => song); // filter out undefined songs

    useEffect(() => {
        dispatch(fetchAlbum(albumId, history));
    }, [dispatch, albumId, history]);

    return (
        <div className='albumShowPage'>
            {album && <AlbumShowHeader album={album} />}
            <hr />
            {album &&
                albumSongs.map((song, idx) => (
                    <AlbumSongListItem
                        key={song.id}
                        song={song}
                        songNum={idx + 1}
                        album={album}
                    />
                ))}
        </div>
    );
};

export default AlbumShow;
