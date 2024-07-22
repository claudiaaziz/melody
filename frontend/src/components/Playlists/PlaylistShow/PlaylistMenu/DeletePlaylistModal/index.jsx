import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './DeletePlaylistModal.css';
import { deletePlaylist } from '../../../../../store/playlists';
import { closeModal } from '../../../../../store/ui';

const DeletePlaylistModal = ({ props }) => {
    const playlist = props.playlist;

    const dispatch = useDispatch();
    const history = useHistory();

    const handleDeletePlaylist = (playlistId) => {
        dispatch(deletePlaylist(playlistId)).then(() => {
            dispatch(closeModal())
            history.push('/');
        });
    };

    return (
        <div className='deletePlaylistModal'>
            <h2 className='bold'>Delete from Your Library?</h2>
            <p className='deletePlaylistWarning'>
                This will delete
                <span className='bold'>{playlist && ` ${playlist.name} `}</span>
                from <span className='bold'>Your Library.</span>
            </p>
            <div className='deletePlaylistModalBtns'>
                <button
                    className='deletePlaylistCancelBtn'
                    onClick={() => dispatch(closeModal())}
                >
                    Cancel
                </button>
                <button
                    className='deletePlaylistDeleteBtn'
                    onClick={() => handleDeletePlaylist(playlist.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default DeletePlaylistModal;
