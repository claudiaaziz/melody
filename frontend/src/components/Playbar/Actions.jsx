import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playAlbumSong, pauseSong, playSong } from '../../store/playbar';
import { ReactComponent as PlayBtn } from "../LogoAndSVGS/playbar/playBtn.svg";
import { ReactComponent as PauseBtn } from "../LogoAndSVGS/playbar/pauseBtn.svg";
import { ReactComponent as PreviousBtn } from "../LogoAndSVGS/playbar/previousBtn.svg";
import { ReactComponent as SkipBtn } from "../LogoAndSVGS/playbar/skipBtn.svg";
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
    if (currentSongIdx > 0) {
      dispatch(playAlbumSong(currentSongIdx - 1, currentAlbumId));
    } else {
      dispatch(playAlbumSong(currentSongIdx, currentAlbumId));
    }
  };
// 1 find the idx of currentSong in albumssongs arr 
// 2 return idx of next song in albumsongs arr
// 3 dispatch action to play albumsong w next song id
  const handleSkip = () => {
    if (currentSongIdx < albumSongs.length - 1) {
      dispatch(playAlbumSong(currentSongIdx+1, currentAlbumId)); 
    } else {
      dispatch(playAlbumSong(currentSongIdx, currentAlbumId));
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