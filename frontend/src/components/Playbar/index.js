import React from "react";
import { useSelector } from "react-redux";
import PlaySong from "./PlaySong";
import PauseSong from "./PauseSong"; 

const Playbar = () => {
  const isPlaying = useSelector((state) => state.playbar.isPlaying);
  const currentSong = useSelector((state) => state.playbar.currentSong);

  return (
    <div className="playbar">
      {isPlaying ? <p>Now Playing: {currentSong}</p> : <p>Paused</p>}
      <PlaySong /> 
      <PauseSong /> 
    </div>
  );
};

export default Playbar;
