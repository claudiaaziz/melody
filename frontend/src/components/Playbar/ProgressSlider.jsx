import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProgress } from "../../store/playbar";

const ProgressSlider = ({ audioRef }) => {
  const dispatch = useDispatch();
  const progress = useSelector((state) => state.playbar.progress || 0);
  const duration = audioRef?.current?.duration || 0;

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes)}:${String(seconds).padStart(2, "0")}`;
  };

  const handleProgressChange = (e) => {
    const newProgress = parseFloat(e.target.value);
    dispatch(updateProgress(newProgress));
    if (audioRef?.current) audioRef.current.currentTime = newProgress;
  };

  return (
    <div className="progressSliderContainer">
      <span className="progressTime">{formatTime(progress)}</span>
      <input
        type="range"
        min="0"
        max={duration}
        step="0.01"
        value={progress}
        onChange={handleProgressChange}
        className="progressSlider"
      />
      <span className="progressTime">{formatTime(duration)}</span>
    </div>
  );
};

export default ProgressSlider;