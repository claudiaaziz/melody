import React from 'react';
import { useDispatch } from 'react-redux';
import { pauseSong } from '../../store/playbar';

const PauseSong = () => {
  const dispatch = useDispatch();

  const handlePause = () => {
    dispatch(pauseSong());
  };

  return (
    <button onClick={handlePause}>Pause</button>
  );
};

export default PauseSong;
