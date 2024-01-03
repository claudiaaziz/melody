import React from "react";
import Actions from "./Actions";
import AudioPlayer from "./AudioPlayer";
import VolumeControl from "./VolumeControl";
import "./Playbar.css";
import { getAlbum } from "../../store/albums";
import { useSelector } from "react-redux";
import SignedOutBanner from "../SignupAndLogin/SignedOutBanner";

const Playbar = () => {
  const currentQueueIdx = useSelector((state) => state.playbar.currentQueueIdx);
  const currentSongId = useSelector(
    (state) => state.playbar.queue[currentQueueIdx]
    );
  const songs = useSelector((state) => state?.songs);
  const currentSong = Object.values(songs).find(
    (song) => song.id === currentSongId
  );
  const currentAlbumId = currentSong?.albumId
  const album = useSelector(getAlbum(currentAlbumId));
  const currentUser = useSelector((state) => state.session.user)
  
  return (
    <>
      <div className="playbar">
        {currentSongId ? (
          <div className="currentSongContainer">
            <img
              src={album?.albumCoverUrl}
              alt=""
              className="currentSongAlbumCover"
            />
            <div className="currentSongDetails">
              <span className="currentSongTitle">{currentSong?.title}</span>
              <span className="currentSongArtistName">{album?.artistName}</span>
            </div>
          </div>
        ) : (
          <div className="currentSongContainer">
          </div>
        )}

        <div className="actionsAndProgressSliderContainer">
          <Actions />
          <AudioPlayer />
        </div>
          <VolumeControl />
        </div>
      {!currentUser && <SignedOutBanner />}
    </>
  );
};

export default Playbar;