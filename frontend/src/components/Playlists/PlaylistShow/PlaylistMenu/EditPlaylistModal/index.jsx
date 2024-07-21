import { useState } from 'react';
import './EditPlaylistModal.css';
import { updatePlaylist } from '../../../../../store/playlists';
import { useDispatch } from 'react-redux';
import { ReactComponent as CloseIcon } from '../../../../../static/svgs/close-modal.svg';
import { ReactComponent as ErrorIcon } from '../../../../../static/svgs/error.svg';
import { closeModal } from '../../../../../store/ui';

const EditPlaylistModal = ({ props }) => {
    const playlist = props.playlist;

    const dispatch = useDispatch();

    const [newPlaylistName, setNewPlaylistName] = useState(playlist.name);
    const [error, setError] = useState(null);
    const [warning, setWarning] = useState(null);

    const handleNameChange = (e) => {
        setNewPlaylistName(e.target.value);
        setError(e.target.value === '' && 'Playlist name is required.');
        setWarning(null);
    };

    const handleCloseEditPlaylistModal = () => {
        if (warning || error || playlist.name === newPlaylistName)
            dispatch(closeModal());
        setWarning(
            playlist.name !== newPlaylistName &&
                "Press save to keep changes you've made."
        );
    };

    const updatePlaylistName = () => {
        dispatch(updatePlaylist({ id: playlist.id, name: newPlaylistName }));
        dispatch(closeModal());
    };

    return (
        <div className='editPlaylistModal'>
            <div className='editPlaylistModalHeader'>
                <h3>Edit playlist name</h3>
                <button
                    onClick={handleCloseEditPlaylistModal}
                    className='closeEditPlaylistModal'
                >
                    <CloseIcon />
                </button>
            </div>
            {error && (
                <div className='playlist-name-error'>
                    <ErrorIcon /> {error}
                </div>
            )}
            {warning && (
                <div className='playlist-name-error warning'>
                    <ErrorIcon /> {warning}
                </div>
            )}
            <input
                type='text'
                value={newPlaylistName}
                onChange={handleNameChange}
            />
            <button
                disabled={error}
                className='updatePlaylistName'
                onClick={updatePlaylistName}
            >
                Save
            </button>
        </div>
    );
};

export default EditPlaylistModal;
