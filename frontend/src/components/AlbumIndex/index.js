import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./AlbumIndex.css";
import { fetchAlbums, getAlbums } from "../../store/albums";

const AlbumIndex = () => {
  const dispatch = useDispatch();
  const albums = useSelector(getAlbums);

  useEffect(() => {
    dispatch(fetchAlbums());
  }, []);

  return (
    <>
      <div className="albumIndex">
        {Object.values(albums).map((album) => (
          <div key={album.id} className="albumContainer">
            <div className="album">
              <img src={album.albumCoverUrl} alt="" />
              <h2 className="artistTitle">{album.title}</h2>
              <p className="artistName">{album.artistName}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AlbumIndex;
