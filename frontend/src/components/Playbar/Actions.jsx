import React from 'react';
import { useDispatch } from 'react-redux';
import { playSong, pauseSong, rewindSong, skipSong } from '../../store/playbar';
import { ReactComponent as PlayBtn } from "../LogoAndSVGS/playbar/playBtn.svg";
import { ReactComponent as PauseBtn } from "../LogoAndSVGS/playbar/pauseBtn.svg";
import { ReactComponent as RewindBtn } from "../LogoAndSVGS/playbar/rewindBtn.svg";
import { ReactComponent as SkipBtn } from "../LogoAndSVGS/playbar/skipBtn.svg";

const Actions = ({ isPlaying, currentSong }) => {
  const dispatch = useDispatch();

  const handlePlay = () => (currentSong?.id) ? dispatch(playSong(currentSong)) : null;
  const handlePause = () => dispatch(pauseSong());
  const handleRewind = () => dispatch(rewindSong());
  const handleSkip = () => dispatch(skipSong());

  return (
    <div className="actionsContainer">
      <button onClick={handleSkip} className='skipBtn'>
        <SkipBtn className='skipIcon' />
      </button>
      <button onClick={isPlaying ? handlePause : handlePlay} className='playAndPauseBtn'>
        {isPlaying ? <PauseBtn className='playAndPauseIcon' /> : <PlayBtn className="playAndPauseIcon" />}
      </button>
      <button onClick={handleRewind} className='rewindBtn'>
        <RewindBtn className='rewindIcon' />
      </button>
    </div>
  );
};

export default Actions;