import React from "react";
import { useSelector } from "react-redux";
import Actions from "./Actions";
import AudioPlayer from "../Playbar/AudioPlayer";
import VolumeControl from "../Playbar/VolumeControl";
import "./Playbar.css";
import MelodyLogo from "../LogoAndSVGS/melodyLogo";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getAlbum } from "../../store/albums";

const Playbar = () => {
  const isPlaying = useSelector((state) => state.playbar.isPlaying);
  const { albumId } = useParams();
  let currentSong = useSelector((state) => state.playbar.currentSong);

  return (
    <div className="playbar">
      <Actions isPlaying={isPlaying} currentSong={currentSong} />
      <AudioPlayer />
      <VolumeControl />
    </div>
  );
};

export default Playbar;
