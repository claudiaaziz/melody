import React, { useState } from "react";
import "./AlbumSongListItem.css";
import { useSelector } from "react-redux";
import { fetchSongDuration, formatSongDuration } from "../../../../utils/fetchAndFormatSongDuration"; 

const AlbumSongListItem = ({ artistName, song, songNum, handleAlbumSongClick }) => {
  const currentQueueIdx = useSelector((state) => state.playbar.currentQueueIdx);
  const currentSongId = useSelector(
    (state) => state.playbar.queue[currentQueueIdx] === song.id
  );

  const [duration, setDuration] = useState(null);
  song.songUrl && fetchSongDuration(song.songUrl, setDuration); 

  return (
    <ul className="songListItem" onClick={handleAlbumSongClick}>
      <li>
        <div className={`songNum ${currentSongId && "currentSongId"}`}>
          {songNum}
        </div>
        <div className="songContent">
          <div className={`songTitle ${currentSongId && "currentSongId"}`}>
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