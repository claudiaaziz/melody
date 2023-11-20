import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playAlbumSong, pauseSong, playSong } from '../../store/playbar';
import { ReactComponent as PlayBtn } from "../LogoAndSVGS/playbar/playBtn.svg";
import { ReactComponent as PauseBtn } from "../LogoAndSVGS/playbar/pauseBtn.svg";
import { ReactComponent as PreviousBtn } from "../LogoAndSVGS/playbar/previousBtn.svg";
import { ReactComponent as NextBtn } from "../LogoAndSVGS/playbar/nextBtn.svg";
import { getAlbum } from '../../store/albums';

const Actions = () => {
  const dispatch = useDispatch();

  const isPlaying = useSelector((state) => state.playbar.isPlaying);
  const currentSongId = useSelector((state) => state.playbar.currentSongId);
  const currentAlbumId = useSelector((state) => state.playbar?.currentAlbumId)
  const album = useSelector(getAlbum(currentAlbumId))
  const albumSongs = album?.albumSongs
  const currentSongIdx = albumSongs?.indexOf(currentSongId)
  const newCurrentSongId = albumSongs?.[currentSongIdx]

  const handlePlay = () => dispatch(playSong());
  const handlePause = () => dispatch(pauseSong());
  const handlePrevious = () => {
    if (currentSongIdx > 0) {
      dispatch(playAlbumSong(newCurrentSongId-1, currentAlbumId));
    } else {
      dispatch(playAlbumSong(albumSongs[albumSongs.length-1], currentAlbumId));
    }
  };
  const handleNext = () => {
    if (currentSongIdx < albumSongs.length - 1) {
      dispatch(playAlbumSong(newCurrentSongId + 1, currentAlbumId)); 
    } else {
      dispatch(playAlbumSong(albumSongs[0], currentAlbumId));
    }
  }

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