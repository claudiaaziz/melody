import './SignUpModal.css';
import { getAlbum } from '../../../store/albums';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { closeModal } from '../../../store/ui';

const SignUpModal = ({ props }) => {
    const albumId = props.albumId;

    const history = useHistory();
    const dispatch = useDispatch();

    const album = useSelector(getAlbum(albumId));

    return (
        <div className='sign-up-modal-container'>
            <div className='sign-up-modal'>
                <img
                    className='signUpModalImg'
                    src={album.albumCoverUrl}
                    alt=''
                />
                <div className='modalContent'>
                    <div className='signUpModalTextDiv'>
                        <h3>Start listening with a</h3>
                        <h3>free Melody account</h3>
                    </div>
                    <button
                        className='signupModalBtn'
                        onClick={() => history.push('/signup')}
                    >
                        Sign up free
                    </button>
                    <p className='signupModalLoginLink'>
                        Already have an account? <Link to='/login'>Log in</Link>
                    </p>
                </div>
            </div>
            <button
                onClick={() => dispatch(closeModal())}
                className='signupModalCloseBtn'
            >
                Close
            </button>
        </div>
    );
};

export default SignUpModal;
