import { useEffect, useState } from 'react';
import { ReactComponent as DotsIcon } from '../../../../static/svgs/dots.svg';
import { ReactComponent as EditPlaylistIcon } from '../../../../static/svgs/playlists/editPlaylist.svg';
import { ReactComponent as DeletePlaylistIcon } from '../../../../static/svgs/playlists/delete.svg';
import './PlaylistMenu.css';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../../store/ui';

const PlaylistMenu = ({ playlist }) => {
    const dispatch = useDispatch();
    const [isPlaylistMenuOpen, setIsPlaylistMenuOpen] = useState(false);
    const openPlaylistMenu = () => setIsPlaylistMenuOpen(true);
    const closePlaylistMenu = () => setIsPlaylistMenuOpen(false);

    // close menu if user clicks off
    useEffect(() => {
        if (!isPlaylistMenuOpen) return;
        document.addEventListener('click', closePlaylistMenu);
        return () => document.removeEventListener('click', closePlaylistMenu);
    }, [isPlaylistMenuOpen]);

    return (
        <>
            <DotsIcon className='dotsIcon' onClick={openPlaylistMenu} />

            {isPlaylistMenuOpen && (
                <ul className='playlist-menu'>
                    <li
                        onClick={() =>
                            dispatch(openModal('edit-playlist', { playlist }))
                        }
                    >
                        <EditPlaylistIcon />
                        <p>Edit playlist name</p>
                    </li>
                    <li
                        onClick={() =>
                            dispatch(openModal('delete-playlist', { playlist }))
                        }
                    >
                        <DeletePlaylistIcon />
                        <p>Delete playlist</p>
                    </li>
                </ul>
            )}
        </>
    );
};

export default PlaylistMenu;
