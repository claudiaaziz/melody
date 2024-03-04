import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AlbumSongListItem from "./AlbumSongListItem/AlbumSongListItem.jsx";
import AlbumShowHeader from "./AlbumShowHeader.jsx";
import { fetchAlbum, getAlbum } from "../../../store/albums.js";
import { getSongs } from "../../../store/songs.js";
import "./AlbumShow.css";
import { Redirect } from "react-router-dom";

const AlbumShow = () => {
  const dispatch = useDispatch();
  const { albumId } = useParams();
  
  useEffect(() => {
    dispatch(fetchAlbum(albumId));
  }, [dispatch, albumId]);
  
  const album = useSelector(getAlbum(albumId));
  
  const songs = useSelector(getSongs);
  const albumSongs = album?.albumSongs?.map((songId) => songs[songId]);

  if (!album) return <Redirect to="/page-not-found"/>
  
  return (
    <div className="albumShowPage">
      {album && <AlbumShowHeader album={album} />}
      <hr />
      {album &&
        albumSongs
          .filter((song) => song) // filter out undefined songs 
          .map((song, idx) => (
            <AlbumSongListItem
              key={song.id}
              song={song}
              songNum={idx + 1}
              album={album}
            />
          ))}
    </div>
  );
};

export default AlbumShow;