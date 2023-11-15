import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbum, getAlbum } from "../../store/albums";
import "./AlbumShowPage.css";
import { useParams } from "react-router-dom";
import SongListItem from "./SongListItem";

const AlbumShowPage = () => {
  const dispatch = useDispatch();
  const { albumId } = useParams();
  const album = useSelector(getAlbum(albumId));

  useEffect(() => {
    dispatch(fetchAlbum(albumId));
  }, [dispatch, albumId]);

  return (
    <div className="albumShow">
      <h2>Album</h2>
      {album ? (
        <div className="albumDetails">
          <img src={album.albumCoverUrl} alt=""></img>
          <h2>{album.title}</h2>
          <span>{album.artistName}</span>
          <span className="albumDetailsDivider">‧</span>
          <span>{album.releaseYear}</span>
          <span className="albumDetailsDivider">‧</span>
          <span>{Object.values(album.songs).length} songs</span>
        </div>
      ) : undefined}

      {album &&
        Object.values(album.songs).map((song) => (
          <SongListItem
            key={song.id}
            song={song}
            artistName={album.artistName}
          />
        ))}
    </div>
  );
};

export default AlbumShowPage;
