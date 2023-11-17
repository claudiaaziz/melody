import React from "react";
import { useSelector } from "react-redux";
import Actions from "./Actions";
import AudioPlayer from "../Playbar/AudioPlayer";
import "./Playbar.css";

const Playbar = () => {
  const isPlaying = useSelector((state) => state.playbar.isPlaying);
  const currentSong = useSelector((state) => state.playbar.currentSong);

  return (
    <div className="playbar">
      <Actions isPlaying={isPlaying} currentSong={currentSong} />
      <AudioPlayer />
    </div>
  );
};

export default Playbar;
