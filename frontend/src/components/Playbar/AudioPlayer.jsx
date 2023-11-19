import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVolume, updateProgress } from "../../store/playbar";
import ProgressSlider from "../Playbar/ProgressSlider";
import { getSong } from "../../store/songs";

const AudioPlayer = ({currentSongIdx, setCurrentSongIdx}) => {
  const queue = useSelector((state) => state.playbar.queue)
  const isPlaying = useSelector((state) => state.playbar.isPlaying);
  const currentSongId = useSelector((state) => state.playbar.currentSongId);
  const songId = queue[currentSongIdx]
  const song = useSelector(getSong(songId))

  const currentSongUrl = useSelector((state) => state.songs[songId]?.songUrl);
  debugger
  const volume = useSelector((state) => state.playbar.volume);
  const currentUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

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
    if (volume) {
      audioRef.current.volume = volume;
    }
  }, [isPlaying, isAudioReady, volume]);

  const handleLoadedMetadata = () => setIsAudioReady(true);

  return (
    <>
      <audio
        ref={audioRef}
        onLoadedMetadata={handleLoadedMetadata}
        onVolumeChange={(e) => dispatch(setVolume(e.target.volume))}
        onTimeUpdate={() => dispatch(updateProgress(audioRef.current.currentTime))}
      />
      <ProgressSlider audioRef={audioRef} />
    </>
  );
};

export default AudioPlayer;
