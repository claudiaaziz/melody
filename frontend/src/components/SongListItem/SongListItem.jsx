import React, { useState, useEffect } from "react";
import "./SongListItem.css";
import { useSelector } from "react-redux";

const SongListItem = ({ artistName, song, songNum, onClick }) => {
  const currentSongId = useSelector((state) => state.playbar.currentSongId === song.id);
  // get song duration from AWS
  const [duration, setDuration] = useState(null);

  const fetchSongDuration = async (url) => {
    const audio = new Audio(url);
    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);
    });
  };

  useEffect(() => {
    if (song.songUrl) fetchSongDuration(song.songUrl);
  }, [song.songUrl]);

  const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <ul className="songListItem" onClick={onClick}>
      <li>
        <div className={`songNum ${currentSongId ? 'currentSongId' : ''}`}>{songNum}</div>
        <div className="songContent">
          <div className={`songTitle ${currentSongId ? 'currentSongId' : ''}`}>{song.title}</div>
          <div className="artistName">{artistName}</div>
        </div>
        <div className="songDuration">{formatDuration(duration)}</div>
      </li>
    </ul>
  );
};

export default SongListItem;