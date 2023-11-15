import React from "react";

const SongListItem = ({ artistName, song }) => {
  return (
    <ul className="songList">
      <li className="songItem">
        {song.title}
        {artistName}
      </li>
    </ul>
  );
};

export default SongListItem;
