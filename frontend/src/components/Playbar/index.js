import React from "react";
import { useSelector } from "react-redux";
import AudioPlayer from "../Playbar/AudioPlayer";
import PlaySong from "./PlaySong";
import PauseSong from "./PauseSong";
import "./Playbar.css";

const Playbar = () => {
  const isPlaying = useSelector((state) => state.playbar.isPlaying);
  const currentSong = useSelector((state) => state.playbar.currentSong);

  return (
    <div className="playbar">
      {isPlaying ? <PauseSong /> : <PlaySong song={currentSong} />}
      <AudioPlayer />
    </div>
  );
};

export default Playbar;