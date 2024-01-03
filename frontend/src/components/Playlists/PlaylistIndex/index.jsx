import React from "react";
import { useSelector } from "react-redux";
import { getPlaylists } from "../../../store/playlists";
import PlaylistIndexItem from "./PlaylistIndexItem";
import "./PlaylistIndex.css";

const PlaylistIndex = () => {
  const playlists = useSelector(getPlaylists);
  const sortedPlaylists = Object.values(playlists).sort((a, b) => b.id - a.id);

  return (
    <div>
      <ul className="playlistIndex">
        {sortedPlaylists.map((playlist) => (
          <PlaylistIndexItem
            key={playlist.id}
            playlist={playlist}
          />
        ))}
      </ul>
    </div>
  );
};

export default PlaylistIndex;