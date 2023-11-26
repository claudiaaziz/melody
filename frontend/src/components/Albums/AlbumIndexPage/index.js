import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./AlbumIndexPage.css";
import AlbumIndexItem from "./AlbumIndexItem";
import { fetchAlbums, getAlbums } from "../../../store/albums";

const AlbumIndexPage = () => {
  const dispatch = useDispatch();
  const albums = useSelector(getAlbums);

  useEffect(() => {
    dispatch(fetchAlbums());
  }, []);

  return (
    <div className="albumIndexPage">
      {Object.values(albums).map((album) => (
        <Link to={`/albums/${album.id}`} key={album.id} className="albumLink">
          <AlbumIndexItem album={album} />
        </Link>
      ))}
    </div>
  );
};

export default AlbumIndexPage;
