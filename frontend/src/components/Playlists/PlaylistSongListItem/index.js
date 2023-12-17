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
  const album = useSelector(getAlbum(albumId));

  return (
    <div className="playlist-song-list-item">
      <img className="albumCoverUrl" src={album?.albumCoverUrl} alt="" />
      <div className="title-and-name">
        <div className="songTitle">{song.title}</div>
        <div className="artistName">{album?.artistName}</div>
      </div>
      <div className="playlist-song-album-title">{album?.title}</div>
      <button className="add-song">Add</button>
    </div>
  );
};

export default PlaylistSongListItem;
