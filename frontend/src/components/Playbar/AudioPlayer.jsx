import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVolume } from "../../store/playbar";

const AudioPlayer = () => {
  const isPlaying = useSelector((state) => state.playbar.isPlaying);
  const currentSong = useSelector((state) => state.playbar.currentSong);
  const volume = useSelector((state) => state.playbar.volume);
  const dispatch = useDispatch();

  const audioRef = useRef(null);
  const [isAudioReady, setIsAudioReady] = useState(false);

  // play/ pause audio 
  useEffect(() => {
    if (isAudioReady && isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, isAudioReady]);

  // update src if currentSong changes
  useEffect(() => {
    if (currentSong) {
      setIsAudioReady(false);
      audioRef.current.src = currentSong.songUrl;
    }
  }, [currentSong]);

  // update volume 
  useEffect(() => {
    if (volume) {
      audioRef.current.volume = volume;
    }
  }, [isPlaying, isAudioReady, volume]);

  const handleLoadedMetadata = () => setIsAudioReady(true);

  return (
    <div>
      <audio
        ref={audioRef}
        onLoadedMetadata={handleLoadedMetadata}
        onVolumeChange={(e) => dispatch(setVolume(e.target.volume))}
      />
    </div>
  );
};

export default AudioPlayer;