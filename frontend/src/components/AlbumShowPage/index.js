import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbum, getAlbum } from "../../store/albums";
import "./AlbumShowPage.css";
import { useParams } from "react-router-dom";
import SongListItem from "./SongListItem";
import { getSongs } from "../../store/songs";

const AlbumShowPage = () => {
  const dispatch = useDispatch();
  const { albumId } = useParams();
  const album = useSelector(getAlbum(albumId));
  const songs = useSelector(getSongs)

  useEffect(() => {
    dispatch(fetchAlbum(albumId));
  }, [dispatch, albumId]);

  const allAlbumSongs =
    album && album.albumSongs
      ? album.albumSongs.map((songId) => songs[songId])
      : [];

  return (
    <div className="albumShow">
      {album ? (
        <div className="albumShowHeader">
          <img src={album.albumCoverUrl} alt=""></img>
          <div className="albumDetails">
            <p>Album</p>
            <h2>{album.title}</h2>
            <div>
              <span>{album.artistName}</span>
              <span>‧</span>
              <span>{album.releaseYear}</span>
              <span>‧</span>
              <span>
                {allAlbumSongs ? Object.values(allAlbumSongs).length : 0} songs
              </span>
            </div>
          </div>
        </div>
      ) : undefined}

      <hr />

      {album &&
        Object.values(allAlbumSongs).map((song, idx) => (
          <SongListItem
            key={song.id}
            song={song}
            songId={idx + 1}
            artistName={album.artistName}
          />
        ))}
    </div>
  );
};

export default AlbumShowPage;
