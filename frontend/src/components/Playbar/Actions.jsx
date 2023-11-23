// playbar actions (play, pause, prev, next)

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playQueue, pauseSong, playSong } from '../../store/playbar';
import { ReactComponent as PlayBtn } from "../../static/LogoAndSVGS/playbar/playBtn.svg";
import { ReactComponent as PauseBtn } from "../../static/LogoAndSVGS/playbar/pauseBtn.svg";
import { ReactComponent as PreviousBtn } from "../../static/LogoAndSVGS/playbar/previousBtn.svg";
import { ReactComponent as NextBtn } from "../../static/LogoAndSVGS/playbar/nextBtn.svg";
import { getAlbum } from '../../store/albums';

const Actions = () => {
  const dispatch = useDispatch();

  const isPlaying = useSelector((state) => state.playbar.isPlaying);
  const currentSongId = useSelector((state) => state.playbar.currentSongId);
  const currentAlbumId = useSelector((state) => state.playbar?.currentAlbumId)
  const album = useSelector(getAlbum(currentAlbumId))
  const albumSongs = album?.albumSongs
  const currentSongIdx = albumSongs?.indexOf(currentSongId)

  const handlePlay = () => dispatch(playSong());
  const handlePause = () => dispatch(pauseSong());
  const handlePrevious = () => {
    const newIdx = (currentSongIdx - 1 + albumSongs.length) % albumSongs.length;
    dispatch(playQueue(albumSongs[newIdx], currentAlbumId));
  };
  const handleNext = () => {
    const newIdx = (currentSongIdx + 1) % albumSongs.length;
    dispatch(playQueue(albumSongs[newIdx], currentAlbumId));
  };

  return (
    <div className="actionsContainer">
      <button onClick={handlePrevious} className='previousBtn'>
        <PreviousBtn className='previousIcon' />
      </button>
      <button onClick={isPlaying ? handlePause : handlePlay} className='playAndPauseBtn'>
        {isPlaying ? <PauseBtn className='playAndPauseIcon' /> : <PlayBtn className="playAndPauseIcon" />}
      </button>
      <button onClick={handleNext} className='nextBtn'>
        <NextBtn className='nextIcon' />
      </button>
    </div>
  );
};

export default Actions;