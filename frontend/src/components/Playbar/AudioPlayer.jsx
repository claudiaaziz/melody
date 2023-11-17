import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AudioPlayer = () => {
  const isPlaying = useSelector((state) => state.playbar.isPlaying);
  const currentSong = useSelector((state) => state.playbar.currentSong);

  // ref for the audio element
  const audioRef = useRef(null);
  const [isAudioReady, setIsAudioReady] = useState(false);

  useEffect(() => {
    if (isAudioReady && isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, isAudioReady]);

  useEffect(() => {
    // if currentSong changes set audio ready to false & change src
    if (currentSong) {
      setIsAudioReady(false); 
      audioRef.current.src = currentSong.songUrl;
    }
  }, [currentSong]);

  // set audio ready state when metadata is loaded
  const handleLoadedMetadata = () => setIsAudioReady(true);

  return <audio ref={audioRef} onLoadedMetadata={handleLoadedMetadata} />;
};

export default AudioPlayer;