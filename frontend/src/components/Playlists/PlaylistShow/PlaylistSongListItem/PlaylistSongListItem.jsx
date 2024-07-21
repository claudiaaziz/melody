import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbum } from '../../../../store/albums';
import DeletePlaylistSong from './DeletePlaylistSong/DeletePlaylistSong';
import './PlaylistSongListItem.css';
import { getSong } from '../../../../store/songs';
import { fetchSongDuration } from '../../../../utils/fetchSongDuration';
import { formatDuration } from '../../../../utils/formatDuration';
import { playQueue } from '../../../../store/playbar';
import useDropdown from '../../../../hooks/useDropdown';

export default function PlaylistSongListItem({
    songId,
    songNum,
    playlist,
    playlistSongId,
    playlistSongs,
}) {
    const dispatch = useDispatch();

    const song = useSelector(getSong(songId));
    const currentQueueIdx = useSelector(
        (state) => state.playbar.currentQueueIdx
    );
    const isCurrentSongId = useSelector(
        (state) => state.playbar.queue[currentQueueIdx] === song?.id
    );
    const albumId = song?.albumId;
    const album = useSelector(getAlbum(albumId));

    const { isDropdownOpen, toggleDropdown, closeDropdown } = useDropdown();
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
        setIsHovered(false);
        closeDropdown();
    };
    const [duration, setDuration] = useState(null);

    song?.songUrl && fetchSongDuration(song.songUrl, setDuration);

    const handlePlaylistSongClick = () => {
        let currentQueueIdx = null;
        let playlistQueue = [];

        for (let i = 0; i < playlistSongs.length; i++) {
            if (playlistSongs[i]?.songId) {
                playlistQueue.push(playlistSongs[i].songId);
            }

            if (playlistSongs[i]?.songId === songId) currentQueueIdx = i;
        }

        dispatch(playQueue(playlistQueue, currentQueueIdx));
    };

    return (
        <div
            className='playlist-song-list-item'
            onMouseDown={handlePlaylistSongClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={`playlist-song-num ${
                    isCurrentSongId && 'currentSongId'
                }`}
                // className={`playlist-song-num ${
                //     isCurrentSongPlaying() && 'currentSongId'
                // }`}
            >
                {songNum}
            </div>
            <img
                className='playlist-song-album-cover-url'
                src={album?.albumCoverUrl}
                alt=''
            />
            <div className='playlist-song-title-and-name'>
                <div
                    className={`playlist-song-song-title ${
                        isCurrentSongId && 'currentSongId'
                    }`}
                    // className={`playlist-song-song-title ${
                    //     isCurrentSongPlaying() && 'currentSongId'
                    // }`}
                >
                    {song?.title}
                </div>
                <div className='playlist-song-artist-name'>
                    {album?.artistName}
                </div>
            </div>
            <div className='playlist-song-album-title'>{album?.title}</div>
            <div className='song-duration'>{formatDuration(duration)}</div>

            {isHovered && (
                <DeletePlaylistSong
                    playlistSongId={playlistSongId}
                    playlist={playlist}
                    isDropdownOpen={isDropdownOpen}
                    toggleDropdown={toggleDropdown}
                />
            )}
        </div>
    );
}
