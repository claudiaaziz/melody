import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./AlbumIndexPage.css";
import { fetchAlbums, getAlbums } from "../../store/albums";
import AlbumIndexItem from "./AlbumIndexItem";

const AlbumIndexPage = () => {
  const dispatch = useDispatch();
  const albums = useSelector(getAlbums);

  useEffect(() => {
    dispatch(fetchAlbums());
  }, []);

  return (
    <div className="albumIndex">
      {Object.values(albums).map((album) => (
        // <Link to={`/albums/${album.id}`} key={album.id}>
          <AlbumIndexItem album={album} />
        // {/* </Link> */}
      ))}
    </div>
  );
};

export default AlbumIndexPage;
