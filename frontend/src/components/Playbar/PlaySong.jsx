import React from 'react';
import { useDispatch } from 'react-redux';
import { playSong } from '../../store/playbar';

const PlaySong = ({ song }) => {
  const dispatch = useDispatch();

  const handlePlay = () => {
    dispatch(playSong(song));
  };

  return (
    <button onClick={handlePlay}>Play</button>
  );
};

export default PlaySong;
