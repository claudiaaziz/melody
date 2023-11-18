import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProgress } from "../../store/playbar";

const ProgressSlider = ({ audioRef }) => {
  const dispatch = useDispatch();
  const progress = useSelector((state) => state.playbar.progress || 0);

  // handle changes in the progress slider
  const handleProgressChange = useCallback((e) => {
    const newProgress = parseFloat(e.target.value);
    dispatch(updateProgress(newProgress));

    // if audioRef exists and has a current property
    if (audioRef && audioRef.current) {
      // update the currentTime property with new progress
      audioRef.current.currentTime = newProgress; 
    }
  }, [audioRef, dispatch]); 

  return (
    <input
      type="range"
      min="0"
      max={audioRef?.current ? audioRef.current.duration || 0 : 0}
      step="0.01"
      value={progress}
      onChange={handleProgressChange}
      className="progressSlider"
    />
  );
};

export default ProgressSlider;
