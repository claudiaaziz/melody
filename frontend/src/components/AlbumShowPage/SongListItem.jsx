import React from "react";

const SongListItem = ({ artistName, song }) => {
  return (
    <ul className="songList">
      <li className="songItem">
        <div className="songId">{song.id}</div>
        <div className="songContent">
          <div className="songTitle">{song.title}</div>
          <div className="artistName">{artistName}</div>
        </div>
      </li>
    </ul>
  );
};

export default SongListItem;
