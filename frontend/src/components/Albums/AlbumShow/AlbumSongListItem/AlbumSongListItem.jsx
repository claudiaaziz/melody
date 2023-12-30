import React, { useState, useEffect } from "react";
import "./AlbumSongListItem.css";
import { useSelector } from "react-redux";
import { fetchSongDuration, formatSongDuration } from "../../../../utils/fetchAndFormatSongDuration"; 

const AlbumSongListItem = ({ artistName, song, songNum, onClick }) => {
  const currentQueueIdx = useSelector((state) => state.playbar.currentQueueIdx);
  const currentSongId = useSelector(
    (state) => state.playbar.queue[currentQueueIdx] === song.id
  );

  const [duration, setDuration] = useState(null);

  useEffect(() => {
    if (song.songUrl) fetchSongDuration(song.songUrl, setDuration); 
  }, [song.songUrl]);

  return (
    <ul className="songListItem" onClick={onClick}>
      <li>
        <div className={`songNum ${currentSongId ? "currentSongId" : ""}`}>
          {songNum}
        </div>
        <div className="songContent">
          <div className={`songTitle ${currentSongId ? "currentSongId" : ""}`}>
            {song.title}
          </div>
          <div className="artistName">{artistName}</div>
        </div>
        <div className="songDuration">{formatSongDuration(duration)}</div>
      </li>
    </ul>
  );
};

export default AlbumSongListItem;