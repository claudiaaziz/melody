import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVolume } from "../../store/playbar";

const VolumeControl = () => {
  const volume = useSelector((state) => state.playbar.volume);
  const dispatch = useDispatch();

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    if (newVolume) dispatch(setVolume(newVolume))
  };

  return (
    <input
      type="range"
      min="0"
      max="1"
      step="0.01"
      value={volume || 0.5} 
      onChange={handleVolumeChange}
      className="volumeSlider" 
    />
  );
};

export default VolumeControl;
