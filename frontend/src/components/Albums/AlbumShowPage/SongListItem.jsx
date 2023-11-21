import React from "react";

const SongListItem = ({ artistName, song, songNum, onClick }) => {
  return (
    <ul className="songList" onClick={onClick}>
      <li className="songItem">
        <div className="songNum">{songNum}</div>
        <div className="songContent">
          <div className="songTitle">{song.title}</div>
          <div className="artistName">{artistName}</div>
        </div>
      </li>
    </ul>
  );
};


export default SongListItem;