import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbum, getAlbum } from "../../store/albums";
import "./AlbumShowPage.css";
import { useParams } from "react-router-dom";

const AlbumShowPage = () => {
  const dispatch = useDispatch();
  const { albumId } = useParams();
  const album = useSelector(getAlbum(albumId));

  useEffect(() => {
    dispatch(fetchAlbum(albumId));
  }, [albumId]);

  return (
    <>
      <div className="albumShow">
        <h2>Album</h2>
        {album ? (
          <div className="albumDetails">
            <img src={album.albumCoverUrl} alt=""></img>
            <h2>{album.title}</h2>
            <p>{album.artistName} ‧</p>
            <p>{album.releaseYear} ‧</p>
            <p>{Object.values(album.songs).length} songs</p>
            {/* <ul> */}
            {Object.values(album.songs).map((song) => (
              <ul key={song.id}>
                <li>{song.title}</li>
                <li>{song.songUrl}</li>
              </ul>
            ))}
            {/* </ul> */}
          </div>
        ) : undefined}
      </div>
    </>
  );
};

export default AlbumShowPage;
