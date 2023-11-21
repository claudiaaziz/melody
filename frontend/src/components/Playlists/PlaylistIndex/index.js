import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPlaylists } from "../../../store/playlists";

const PlaylistIndex = () => {
  const playlists = useSelector(getPlaylists);

  return (
    <div>
      <ul className="playlistList">
        {playlists.map((playlist) => (
          <li key={playlist.id}>
            <NavLink
              to={`/playlists/${playlist.id}`}
              className="playlistListItem"
            >
              {playlist.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistIndex;
