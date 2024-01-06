const ProgressSlider = ({ audioRef, progress, setProgress }) => {
  const duration = audioRef?.current?.duration || 0;

  const handleProgressChange = (e) => {
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
    if (audioRef?.current) audioRef.current.currentTime = newProgress;
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
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