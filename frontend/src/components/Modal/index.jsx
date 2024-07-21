import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/ui';
import EditPlaylistModal from '../Playlists/PlaylistShow/PlaylistMenu/EditPlaylistModal';
import DeletePlaylistModal from '../Playlists/PlaylistShow/PlaylistMenu/DeletePlaylistModal';
import './Modal.css'
import SignUpModal from '../SessionForms/SignUpModal';

export default function Modal() {
    const dispatch = useDispatch();

    const modal = useSelector((state) => state.ui.modal);

    if (!modal) return null;

    let component;

    switch (modal.modalTitle) {
        case 'sign-up':
            component = <SignUpModal props={modal.props} />;
            break;
        case 'edit-playlist':
            component = <EditPlaylistModal props={modal.props} />;
            break;
        case 'delete-playlist':
            component = <DeletePlaylistModal props={modal.props} />;
            break;
        default:
            return null;
    }

    return (
        <div
            className='modal-backdrop'
            onMouseDown={() => dispatch(closeModal())}
        >
            <div
                className={`modal-content`}
                onMouseDown={(e) => e.stopPropagation()}
            >
                {component}
            </div>
        </div>
    );
}