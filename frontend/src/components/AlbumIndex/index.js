import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./AlbumIndex.css";
import { fetchAlbums, getAlbums } from "../../store/albums";
import AlbumIndexItem from "./AlbumIndexItem";

const AlbumIndex = () => {
  const dispatch = useDispatch();
  const albums = useSelector(getAlbums);

  useEffect(() => {
    dispatch(fetchAlbums());
  }, []);

  return (
    <div className="albumIndex">
      {Object.values(albums).map((album) => (
        <AlbumIndexItem key={album.id} album={album} />
      ))}
    </div>
  );
};

export default AlbumIndex;
