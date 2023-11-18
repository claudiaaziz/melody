import React from "react";
import Actions from "./Actions";
import AudioPlayer from "../Playbar/AudioPlayer";
import VolumeControl from "../Playbar/VolumeControl";
import "./Playbar.css";
import { useParams } from "react-router-dom";
import { getAlbum } from "../../store/albums";
import { useSelector } from "react-redux";
import MelodyLogo from "../LogoAndSVGS/melodyLogo";

const Playbar = () => {
  let currentSongId = useSelector(
    (state) => state.playbar && state.playbar.currentSongId
  );
  const { albumId } = useParams();
  const album = useSelector(getAlbum(albumId));
  const albumCover = useSelector(
    (state) => state.albums[album?.id]?.albumCoverUrl
  );
  const artistName = album?.artistName;
  const songs = useSelector((state) => state?.songs);
  const currentSong = Object.values(songs).find(
    (song) => song.id === currentSongId
  );

  return (
    <div className="playbar">
      {currentSongId ? (
        <div className="currentSongContainer">
          <img src={albumCover} alt="" className="albumCover" />
          <div className="currentSongDetails">
            <span className="currentSongTitle">{currentSong.title}</span>
            <span className="currentSongArtistName"> {artistName}</span>
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