import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPlaylist, getPlaylists } from '../../store/playlists';
import { useHistory, Redirect } from 'react-router-dom';
import { ReactComponent as CreatePlaylistIcon } from '../../static/svgs/sideMenu/createPlaylist.svg';
import { ReactComponent as PlusIcon } from '../../static/svgs/sideMenu/plus.svg';
import useDropdown from '../../hooks/useDropdown';

const CreatePlaylistDropdown = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const currentUser = useSelector((state) => state.session.user);
    const playlists = useSelector(getPlaylists);

    const { isDropdownOpen, toggleDropdown, dropdownRef } = useDropdown();
    const [createdPlaylist, setCreatedPlaylist] = useState(null);
    const [redirectToPlaylist, setRedirectToPlaylist] = useState(false);

    const handleDropdownClick = () => {
        currentUser ? handleCreatePlaylist() : history.push('/signup');
    };

    const handleCreatePlaylist = async () => {
        const amtPlaylists = Object.values(playlists).length;

        const createdPlaylistData = {
            name: `My Playlist #${amtPlaylists + 1}`,
        };

        dispatch(createPlaylist(createdPlaylistData)).then((playlist) => {
            toggleDropdown();
            setCreatedPlaylist(playlist);
            setRedirectToPlaylist(true);
        });
    };

    return (
        <div ref={dropdownRef}>
            <button className='plusButton' onClick={toggleDropdown}>
                <PlusIcon />
            </button>

            {isDropdownOpen && (
                <div
                    className='createPlaylistDropdown'
                    onClick={handleDropdownClick}
                >
                    <div className='createPlaylist'>
                        <CreatePlaylistIcon />
                        <p className='create-a-new-playlist'>
                            Create a new playlist
                        </p>
                    </div>
                </div>
            )}

            {redirectToPlaylist && createdPlaylist && (
                <Redirect to={`/playlists/${createdPlaylist.id}`} />
            )}
        </div>
    );
};

export default CreatePlaylistDropdown;
