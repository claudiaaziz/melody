import { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { playNext, updateVolume, updateProgress } from "../../store/playbar";
import ProgressSlider from "../Playbar/ProgressSlider";

const AudioPlayer = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  const isPlaying = useSelector((state) => state.playbar.isPlaying);
  const volume = useSelector((state) => state.playbar.volume);
  const currentQueueIdx = useSelector((state) => state.playbar.currentQueueIdx)
  const currentSongId = useSelector((state) => state.playbar.queue[currentQueueIdx]);
  const currentSongUrl = useSelector((state) => state.songs[currentSongId]?.songUrl);

  const audioRef = useRef(null);
  const [isAudioReady, setIsAudioReady] = useState(false);

  // play/ pause audio 
  useEffect(() => {
    if (isAudioReady && isPlaying && currentUser) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, isAudioReady, currentUser]);

  // update src if currentSongUrl changes
  useEffect(() => {
    if (currentSongUrl) {
      setIsAudioReady(false);
      audioRef.current.src = currentSongUrl;
    }
  }, [currentSongUrl]);

  // update volume if volume state changes
  useEffect(() => {
    if (volume) audioRef.current.volume = volume;
  }, [isPlaying, isAudioReady, volume]);


  // after audio ends go to next song
  useEffect(() => {
    const handleNext = () => dispatch(playNext());
    const audioEle = document.querySelector("audio")
    audioEle.addEventListener("ended", () => handleNext())
  }, [audioRef, dispatch])

  // when metadata is loaded for the audio 
  const handleLoadedMetadata = () => setIsAudioReady(true);

  return (
    <>
      <audio
        ref={audioRef}
        onLoadedMetadata={handleLoadedMetadata}
        onVolumeChange={(e) => dispatch(updateVolume(e.target.volume))}
        onTimeUpdate={() => dispatch(updateProgress(audioRef.current.currentTime))}
      />
      <ProgressSlider audioRef={audioRef} />
    </>
  );
};

export default AudioPlayer;