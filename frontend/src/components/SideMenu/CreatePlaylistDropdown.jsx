import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPlaylist, getPlaylists } from '../../store/playlists';
import { useHistory, Redirect } from 'react-router-dom';
import { ReactComponent as CreatePlaylistIcon } from '../../static/svgs/sideMenu/createPlaylist.svg';
import { ReactComponent as PlusIcon } from '../../static/svgs/sideMenu/plus.svg';

const CreatePlaylistDropdown = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector((state) => state.session.user);
    const playlists = useSelector(getPlaylists);

    // create playlist dropdown
    const [isCreatePlaylistDropdownOpen, setCreatePlaylistDropdownOpen] =
        useState(false);
    const openCreatePlaylistDropdown = () =>
        setCreatePlaylistDropdownOpen(true);
    const closeCreatePlaylistModal = () => setCreatePlaylistDropdownOpen(false);

    useEffect(() => {
        // close dropdown if user clicks off
        const handleClickOutside = () =>
            isCreatePlaylistDropdownOpen && closeCreatePlaylistModal();
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isCreatePlaylistDropdownOpen]);

    const handleCreatePlaylistDropdownClick = () => {
        currentUser ? handleCreatePlaylist() : history.push('/signup');
    };

    // create playlist
    const [createdPlaylist, setCreatedPlaylist] = useState(null);
    const [redirectToPlaylist, setRedirectToPlaylist] = useState(false);

    const handleCreatePlaylist = async () => {
        const amtPlaylists = Object.values(playlists).length;
        const createPlaylistData = {
            name: `My Playlist #${amtPlaylists + 1}`,
            user_id: currentUser.id,
        };

        const playlist = await dispatch(createPlaylist(createPlaylistData));

        if (playlist) {
            setCreatedPlaylist(playlist);
            setRedirectToPlaylist(true);
        }
    };

    return (
        <>
            <button className='plusButton' onClick={openCreatePlaylistDropdown}>
                <PlusIcon />
            </button>
            {isCreatePlaylistDropdownOpen && (
                <div
                    className='createPlaylistDropdown'
                    onClick={handleCreatePlaylistDropdownClick}
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
        </>
    );
};

export default CreatePlaylistDropdown;
