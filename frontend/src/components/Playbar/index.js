import React, { useState } from "react";
import Actions from "./Actions";
import AudioPlayer from "../Playbar/AudioPlayer";
import VolumeControl from "../Playbar/VolumeControl";
import "./Playbar.css";
import { getAlbum } from "../../store/albums";
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
  // const albumId = currentSong?.albumId;
  // const album = useSelector(getAlbum(albumId));


  // check
  const queue = useSelector((state) => state.playbar.queue);
  const [currentSongIdx, setCurrentSongIdx] = useState(
    queue.indexOf(currentSongId)
  );

  return (
    <div className="playbar">
      {currentSongId ? (
        <div className="currentSongContainer">
          {/* <img src={album?.albumCoverUrl} alt="" className="albumCover" /> */}
          <div className="currentSongDetails">
            <span className="currentSongTitle">{currentSong.title}</span>
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
        <Actions
          currentSongIdx={currentSongIdx}
          setCurrentSongIdx={setCurrentSongIdx}
        />
        <AudioPlayer
          currentSongIdx={currentSongIdx}
          setCurrentSongIdx={setCurrentSongIdx}
          queue={queue}
        />
      </div>
      <VolumeControl />
    </div>
  );
};

export default Playbar;