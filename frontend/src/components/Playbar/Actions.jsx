import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playSong, pauseSong, skipSong, previousSong } from '../../store/playbar';
import { ReactComponent as PlayBtn } from "../LogoAndSVGS/playbar/playBtn.svg";
import { ReactComponent as PauseBtn } from "../LogoAndSVGS/playbar/pauseBtn.svg";
import { ReactComponent as PreviousBtn } from "../LogoAndSVGS/playbar/previousBtn.svg";
import { ReactComponent as SkipBtn } from "../LogoAndSVGS/playbar/skipBtn.svg";

const Actions = ({currentSongIdx, setCurrentSongIdx, queue}) => {
  const dispatch = useDispatch();

  const isPlaying = useSelector((state) => state.playbar.isPlaying);
  const currentSongId = useSelector((state) => state.playbar.currentSongId);

  const handlePlay = () => dispatch(playSong(currentSongId));
  const handlePause = () => dispatch(pauseSong());
  const handlePrevious = () => dispatch(previousSong())
  const handleSkip = () => {
    if (currentSongIdx < queue.length - 1) {
      setCurrentSongIdx(currentSongIdx + 1) 
    }
  }

  return (
    <div className="actionsContainer">
      <button onClick={handleSkip} className='skipBtn'>
        <SkipBtn className='skipIcon' />
      </button>
      <button onClick={isPlaying ? handlePause : handlePlay} className='playAndPauseBtn'>
        {isPlaying ? <PauseBtn className='playAndPauseIcon' /> : <PlayBtn className="playAndPauseIcon" />}
      </button>
      <button onClick={handlePrevious} className='previousBtn'>
        <PreviousBtn className='previousIcon' />
      </button>
    </div>
  );
};

export default Actions;

