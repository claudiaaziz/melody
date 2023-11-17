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
  const album = useSelector(getAlbum(albumId));
  const currentSong = useSelector((state) => state.playbar.currentSong);
  const albumCover = useSelector(
    (state) => state.albums[album?.id]?.albumCoverUrl
  );
  const artistName = useSelector(
    (state) => state.albums[currentSong?.id]?.artistName
  );

  return (
    <div className="playbar">
      {currentSong ? (
        <div className="currentSongContainer">
          <img src={albumCover} alt="" className="albumCover" />
          <div className="currentSongDetails">
            <span className="currentSongTitle">{currentSong.title}</span>
            <span className="currentSongArtistName">{artistName}</span>
          </div>
        </div>
      ) : 
      <div>
      <MelodyLogo className="noCurrentSong"/>
      </div>
      }

      <Actions isPlaying={isPlaying} currentSong={currentSong} />
      <AudioPlayer />
      <VolumeControl />
    </div>
  );
};

export default Playbar;
