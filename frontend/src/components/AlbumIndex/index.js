import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./AlbumIndex.css";
import { fetchAlbums, getAlbums } from "../../store/albums";
import SideMenu from "./SideMenu";

const AlbumIndex = () => {
  const dispatch = useDispatch();
  const albums = useSelector(getAlbums);

  useEffect(() => {
    dispatch(fetchAlbums());
  }, []);

  return (
    <>
      <SideMenu />
      <div className="albumIndex">
        {albums.map((album) => (
          <div key={album.id} className="album">
            <img src={album.albumCoverUrl} alt="" />
            <h2>{album.title}</h2>
            <p className="artistName">{album.artistName}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AlbumIndex;
