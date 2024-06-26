import playlistCover from '../../../static/images/playlistCover.png';
import PlaylistMenu from './PlaylistMenu';
import { toggleEditPlaylistModal } from '../../../store/modals';
import { useDispatch, useSelector } from 'react-redux';

const PlaylistShowHeader = ({ playlist }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.session.user);

    return (
        <>
            <div className='playlistShowHeader'>
                <img
                    src={playlistCover}
                    alt=''
                    className='playlistShowHeaderImg'
                />
                <div className='playlistDetails'>
                    <p>Playlist</p>
                    <h2 onClick={() => dispatch(toggleEditPlaylistModal(true))}>
                        {playlist.name}
                    </h2>
                    <div>
                        <span>{currentUser.username}</span>
                        {playlist.playlistSongs.length > 0 && (
                            <>
                                <span>‧</span>
                                <span>
                                    {playlist.playlistSongs.length} songs
                                </span>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className='dotsContainer'>
                <PlaylistMenu playlist={playlist} />
            </div>
        </>
    );
};

export default PlaylistShowHeader;
