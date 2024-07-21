import { useDispatch } from 'react-redux';
import { deletePlaylistSong } from '../../../../../store/playlists';
import { ReactComponent as DotsIcon } from '../../../../../static/svgs/dots.svg';
import { ReactComponent as TrashIcon } from '../../../../../static/svgs/playlists/removeSong.svg';

const DeletePlaylistSong = ({
    playlistSongId,
    playlist,
    isDropdownOpen,
    toggleDropdown,
}) => {
    const dispatch = useDispatch();

    const handleDeletePlaylistSong = (e) => {
        e.stopPropagation();
        dispatch(deletePlaylistSong(playlistSongId, playlist.id));
        toggleDropdown();
    };

    return (
        <>
            <button
                className='dots-icon-button'
                onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown();
                }}
            >
                <DotsIcon className='dotsIcon' />
            </button>

            {isDropdownOpen && (
                <div
                    className='remove-playlist-song-dropdown'
                    onClick={handleDeletePlaylistSong}
                >
                    <div className='removeSong'>
                        <TrashIcon />
                        <p>Remove from this playlist</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default DeletePlaylistSong;
