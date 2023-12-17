import React, { useEffect } from "react";
import "./PlaylistSongListItem.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums, getAlbum } from "../../../store/albums";

const PlaylistSongListItem = ({ song }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

  const albumId = song.albumId;
  // console.log(albumId)
  const album = useSelector(getAlbum(albumId))



  return (
    <ul className="playlist-song-list-item">
      <li>
        <div className="songContent">
          <img className="albumCoverUrl" src={album?.albumCoverUrl} alt="" />
          <div className="songTitle">{song.title}</div>
          <div className="artistName">{album?.artistName}</div>
          <div className="artistName">{album?.title}</div>
        </div>
      </li>
    </ul>
  );
};

export default PlaylistSongListItem;
