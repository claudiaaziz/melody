import React from "react";
import Actions from "./Actions";
import AudioPlayer from "../Playbar/AudioPlayer";
import VolumeControl from "../Playbar/VolumeControl";
import "./Playbar.css";
import { useSelector } from "react-redux";
import MelodyLogo from "../LogoAndSVGS/melodyLogo";

const Playbar = () => {
  let currentSongId = useSelector(
    (state) => state.playbar && state.playbar.currentSongId
  );
  const songs = useSelector((state) => state?.songs);
  const currentSong = Object.values(songs).find(
    (song) => song.id === currentSongId
  );

  return (
    <div className="playbar">
      {currentSongId ? (
        <div className="currentSongContainer">
          {/* <img src={album?.albumCoverUrl} alt="" className="albumCover" /> */}
          <div className="currentSongDetails">
            <span className="currentSongTitle">{currentSong?.title}</span>
            {/* <span className="currentSongArtistName">
              {album?.artistName}
            </span> */}
          </div>
        </div>
      ) : (
        <div className="currentSongContainer">
          <MelodyLogo />
        </div>
      )}

      <div className="actionsAndProgressSliderContainer">
        <Actions />
        <AudioPlayer />
      </div>
      <VolumeControl />
    </div>
  );
};

export default Playbar;
