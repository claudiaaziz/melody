import React from "react";
import Actions from "./Actions";
import AudioPlayer from "../Playbar/AudioPlayer";
import VolumeControl from "../Playbar/VolumeControl";
import "./Playbar.css";

const Playbar = () => {
  return (
    <div className="playbar">
      <Actions />
      <AudioPlayer />
      <VolumeControl />
    </div>
  );
};

export default Playbar;