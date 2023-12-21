import React, { useState, useEffect } from "react";
import "./PlaylistSongListItem.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums, getAlbum } from "../../../../store/albums";
import { ReactComponent as DotsIcon } from "../../../../static/LogoAndSVGS/dots.svg";
import { deletePlaylistSong, fetchPlaylist } from "../../../../store/playlists";


const PlaylistSongListItem = ({
  artistName,
  song,
  songNum,
  onClick,
  playlist,
  playlistSongId,
  boolean
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

  const albumId = song.albumId;
  const album = useSelector(getAlbum(albumId));
  // const currentSongId = useSelector(
  //   (state) => state.playbar.currentSongId === song.id
  // );

  // delete playlist song
  const handleDeletePlaylistSong = () => {
    console.log("💗", playlistSongId)
    dispatch(deletePlaylistSong(playlistSongId, playlist.id));
    boolean(true)
  };

  // get song duration from AWS
  const [duration, setDuration] = useState(null);

  const fetchSongDuration = async (url) => {
    const audio = new Audio(url);
    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);
    });
  };

  useEffect(() => {
    if (song.songUrl) fetchSongDuration(song.songUrl);
  }, [song.songUrl]);

  const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="playlist-song-list-item" onClick={onClick}>
      <div className="playlist-song-num">{songNum}</div>
      <img
        className="playlist-song-album-cover-url"
        src={album?.albumCoverUrl}
        alt=""
      />
      <div className="playlist-song-title-and-name">
        <div className="playlist-song-song-title">{song.title}</div>
        <div className="playlist-song-artist-name">{album?.artistName}</div>
      </div>
      <div className="playlist-song-album-title">{album?.title}</div>
      <button className="" onClick={handleDeletePlaylistSong}>
        Delete
      </button>
      {/* <DotsIcon className="dotsIcon" /> */}
      <div className="song-duration">{formatDuration(duration)}</div>
    </div>
  );
};

export default PlaylistSongListItem;
