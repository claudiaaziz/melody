import React from "react";

const SongListItem = ({ artistName, song }) => {
  return (
    <ul>
      <li>{song.title}</li>
      <li>{artistName}</li>
    </ul>
  );
};

export default SongListItem;
