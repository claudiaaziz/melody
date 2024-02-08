import { formatDuration } from "../../utils/formatDuration";

const ProgressSlider = ({ audioRef, progress, setProgress }) => {
  const duration = audioRef?.current?.duration || 0;

  const handleProgressChange = (e) => {
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
    if (audioRef?.current) audioRef.current.currentTime = newProgress;
  };

  return (
    <div className="progressSliderContainer">
      <span className="progressTime">{formatDuration(progress)}</span>
      <input
        type="range"
        min="0"
        max={duration}
        step="0.01"
        value={progress}
        onChange={handleProgressChange}
        className="progressSlider"
      />
      <span className="progressTime">{formatDuration(duration)}</span>
    </div>
  );
};

export default ProgressSlider;