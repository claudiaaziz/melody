// playbar child component, actions (play, pause, prev, next)

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pauseSong, playSong, playNext, playPrev } from '../../store/playbar';
import { ReactComponent as PlayBtn } from "../../static/LogoAndSVGS/playbar/playBtn.svg";
import { ReactComponent as PauseBtn } from "../../static/LogoAndSVGS/playbar/pauseBtn.svg";
import { ReactComponent as PreviousBtn } from "../../static/LogoAndSVGS/playbar/previousBtn.svg";
import { ReactComponent as NextBtn } from "../../static/LogoAndSVGS/playbar/nextBtn.svg";

const Actions = () => {
  const dispatch = useDispatch();

  const isPlaying = useSelector((state) => state.playbar.isPlaying);
  const currentQueueIdx = useSelector((state) => state.playbar.currentQueueIdx)
  const currentSongId = useSelector((state) => state.playbar.queue[currentQueueIdx]);

  const handlePlay = () => dispatch(playSong());
  const handlePause = () => dispatch(pauseSong());
  const handlePrevious = () => {
    if (!currentSongId) return
    dispatch(playPrev())
  };
  const handleNext = () => {
    if (!currentSongId) return;
    dispatch(playNext())
  };

  return (
    <div className="actionsContainer" disabled={!currentSongId}>
      <button onClick={handlePrevious} className='previousBtn'>
        <PreviousBtn className='previousIcon' />
      </button>
      <button onClick={isPlaying ? handlePause : handlePlay} className='playAndPauseBtn' disabled={!currentSongId}>
        {isPlaying ? <PauseBtn className='playAndPauseIcon' /> : <PlayBtn className="playAndPauseIcon" />}
      </button>
      <button onClick={handleNext} className='nextBtn' disabled={!currentSongId}>
        <NextBtn className='nextIcon' />
      </button>
    </div>
  );
};

export default Actions;