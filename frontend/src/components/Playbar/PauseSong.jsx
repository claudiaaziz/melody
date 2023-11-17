import React from 'react';
import { useDispatch } from 'react-redux';
import { pauseSong } from '../../store/playbar';
import { ReactComponent as PauseBtn } from "../LogoAndSVGS/playbar/pauseBtn.svg";

const PauseSong = () => {
  const dispatch = useDispatch();

  const handlePause = () => dispatch(pauseSong());

  return (
    <button onClick={handlePause} className='playAndPauseBtn'>
      <PauseBtn className='playAndPauseIcon' />
    </button>
  );
};

export default PauseSong;