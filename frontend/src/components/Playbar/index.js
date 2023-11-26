import React from "react";
import Actions from "./Actions";
import AudioPlayer from "../Playbar/AudioPlayer";
import VolumeControl from "../Playbar/VolumeControl";
import "./Playbar.css";
import { getAlbum } from "../../store/albums";
import { useSelector } from "react-redux";
import MelodyLogo from "../../static/LogoAndSVGS/melodyLogo";

const Playbar = () => {
  const currentSongId = useSelector((state) => state?.playbar.currentSongId);
  const songs = useSelector((state) => state?.songs);
  const currentSong = Object.values(songs).find(
    (song) => song.id === currentSongId
  );
  const currentAlbumId = useSelector((state) => state?.playbar.currentAlbumId);
  const album = useSelector(getAlbum(currentAlbumId));

  return (
    <div className="playbar">
      {currentSongId ? (
        <div className="currentSongContainer">
          <img
            src={album?.albumCoverUrl}
            alt=""
            className="currentSongAlbumCover"
          />
          <div className="currentSongDetails">
            <span className="currentSongTitle">{currentSong.title}</span>
            <span className="currentSongArtistName">{album?.artistName}</span>
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
      <div className="volumeControlContainer">
        <VolumeControl />
      </div>
    </div>
  );
};

export default Playbar;
