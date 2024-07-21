import Actions from './Actions';
import AudioPlayer from './AudioPlayer';
import VolumeControl from './VolumeControl';
import './Playbar.css';
import { useSelector } from 'react-redux';
import CurrentSongContainer from './CurrentSongContainer';
import SignedOutBanner from '../SessionForms/SignedOutBanner';

const Playbar = () => {
    const currentUser = useSelector((state) => state.session.user);

    return (
        <>
            <div className='playbar'>
                <CurrentSongContainer />
                <div className='actionsAndProgressSliderContainer'>
                    <Actions />
                    <AudioPlayer />
                </div>
                <VolumeControl />
            </div>
            {!currentUser && <SignedOutBanner />}
        </>
    );
};

export default Playbar;
