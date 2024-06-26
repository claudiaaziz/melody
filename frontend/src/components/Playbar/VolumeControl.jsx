import { useSelector, useDispatch } from 'react-redux';
import { updateVolume } from '../../store/playbar';

const VolumeControl = () => {
    const dispatch = useDispatch();
    const volume = useSelector((state) => state.playbar.volume);
    const currentQueueIdx = useSelector(
        (state) => state.playbar.currentQueueIdx
    );
    const currentSongId = useSelector(
        (state) => state.playbar.queue[currentQueueIdx]
    );

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        if (newVolume) dispatch(updateVolume(newVolume));
    };

    return (
        <div className='volumeControlContainer'>
            <input
                disabled={!currentSongId}
                type='range'
                min='0'
                max='1'
                step='0.01'
                value={volume || 0.5}
                onChange={handleVolumeChange}
                className='volumeSlider'
            />
        </div>
    );
};

export default VolumeControl;
