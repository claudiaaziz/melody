import React from 'react';
import { useDispatch } from 'react-redux';
import { playSong } from '../../store/playbar';
import { ReactComponent as PlayBtn } from "../LogoAndSVGS/playbar/playBtn.svg";

const PlaySong = ({ song }) => {
  const dispatch = useDispatch();

  const handlePlay = () => (song && song.id) ? dispatch(playSong(song)) : null;

  return (
    <button onClick={handlePlay} className='playAndPauseBtn'>
      <PlayBtn className="playAndPauseIcon" />
    </button>
  );
};

export default PlaySong;