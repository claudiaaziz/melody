import React from "react";
import { useSelector } from "react-redux";
import PlaySong from "./PlaySong";
import PauseSong from "./PauseSong";
import "./Playbar.css";

const Playbar = () => {
  const isPlaying = useSelector((state) => state.playbar.isPlaying);
  // const currentSong = useSelector((state) => state.playbar.currentSong);

  return (
    <div className="playbar">
      {isPlaying ? <PauseSong /> : <PlaySong />}
    </div>
  );
};

export default Playbar;
