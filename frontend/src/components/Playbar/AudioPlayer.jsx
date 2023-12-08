import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { playQueue, setVolume, updateProgress } from "../../store/playbar";
import ProgressSlider from "../Playbar/ProgressSlider";
import { getAlbum } from "../../store/albums";

const AudioPlayer = () => {
  const isPlaying = useSelector((state) => state.playbar.isPlaying);
  const currentSongId = useSelector((state) => state.playbar.currentSongId);
  const currentSongUrl = useSelector((state) => state.songs[currentSongId]?.songUrl);
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


  // after audio ends go to next song
  const currentAlbumId = useSelector((state) => state.playbar?.currentAlbumId)
  const album = useSelector(getAlbum(currentAlbumId))
  const albumSongs = album?.albumSongs
  const currentSongIdx = albumSongs?.indexOf(currentSongId)

  useEffect(() => {
  const handleNext = () => {
    const newIdx = (currentSongIdx + 1) % albumSongs?.length;
    dispatch(playQueue(albumSongs?.[newIdx], currentAlbumId));
  };
  const audioEle = document.querySelector("audio")
      audioEle.addEventListener("ended", (event) => {
      handleNext()
  });

  }, [audioRef, albumSongs, currentAlbumId, currentSongIdx, dispatch])

  // when metadata is loaded for the audio
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