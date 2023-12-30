import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./AlbumIndex.css";
import AlbumIndexItem from "./AlbumIndexItem.jsx";
import { fetchAlbums, getAlbums } from "../../../store/albums";

const AlbumIndex = () => {
  const dispatch = useDispatch();
  const albums = useSelector(getAlbums);

  useEffect(() => {
    dispatch(fetchAlbums());
  }, []);

  return (
    <div className="albumIndexPage">
      <div className="album-index-items">
      {Object.values(albums).map((album) => (
        <Link to={`/albums/${album.id}`} key={album.id} className="albumLink">
          <AlbumIndexItem album={album} />
        </Link>
      ))}
      </div>
    </div>
  );
};

export default AlbumIndex;
