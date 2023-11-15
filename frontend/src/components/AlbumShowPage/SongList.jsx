import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbum, getAlbum } from "../../store/albums";
import "./AlbumShowPage.css";
import { useParams } from "react-router-dom";
import SongListItem from "./SongList";

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
            <span>{album.artistName} ‧</span>
            <span>{album.releaseYear} ‧</span>
            <span>{Object.values(album.songs).length} songs</span>
          </div>
        ) : undefined}
      </div>

      {album &&
        Object.values(album.songs).map((song) => (
          <SongListItem key={song.id} album={album} song={song} />
        ))}
    </>
  );
};

export default AlbumShowPage;
