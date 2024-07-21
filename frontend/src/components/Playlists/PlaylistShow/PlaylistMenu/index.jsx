import { ReactComponent as DotsIcon } from '../../../../static/svgs/dots.svg';
import { ReactComponent as EditPlaylistIcon } from '../../../../static/svgs/playlists/editPlaylist.svg';
import { ReactComponent as DeletePlaylistIcon } from '../../../../static/svgs/playlists/delete.svg';
import './PlaylistMenu.css';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../../store/ui';
import useDropdown from '../../../../hooks/useDropdown';

const PlaylistMenu = ({ playlist }) => {
    const dispatch = useDispatch();

    const { isDropdownOpen, toggleDropdown, dropdownRef } = useDropdown();

    return (
        <div ref={dropdownRef}>
            <DotsIcon className='dotsIcon' onClick={toggleDropdown} />

            {isDropdownOpen && (
                <ul className='playlist-menu'>
                    <li
                        onClick={() => {
                            dispatch(openModal('edit-playlist', { playlist }));
                            toggleDropdown();
                        }}
                    >
                        <EditPlaylistIcon />
                        <p>Edit playlist name</p>
                    </li>
                    <li
                        onClick={() => {
                            dispatch(
                                openModal('delete-playlist', { playlist })
                            );
                            toggleDropdown();
                        }}
                    >
                        <DeletePlaylistIcon />
                        <p>Delete playlist</p>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default PlaylistMenu;
