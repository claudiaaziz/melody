import React, { useState, useEffect } from "react";
import "./PlaylistSongListItem.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums, getAlbum } from "../../../../store/albums";
import DeletePlaylistSong from "./DeletePlaylistSong/DeletePlaylistSong";
import { fetchSongDuration, formatSongDuration } from "../../../../utils/fetchAndFormatSongDuration"; 

const PlaylistSongListItem = ({
  song,
  songNum,
  onClick,
  playlist,
  playlistSongId
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

  const currentQueueIdx = useSelector(
    (state) => state.playbar.currentQueueIdx
  );
  const currentSongId = useSelector(
    (state) => state.playbar.queue[currentQueueIdx] === song.id
  );
  const albumId = song.albumId;
  const album = useSelector(getAlbum(albumId));

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const [duration, setDuration] = useState(null);

  useEffect(() => {
    if (song.songUrl) fetchSongDuration(song.songUrl, setDuration); 
  }, [song.songUrl]);

  return (
    <div
      className="playlist-song-list-item"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`playlist-song-num ${currentSongId ? "currentSongId" : ""}`}
      >
        {songNum}
      </div>
      <img
        className="playlist-song-album-cover-url"
        src={album?.albumCoverUrl}
        alt=""
      />
      <div className="playlist-song-title-and-name">
        <div
          className={`playlist-song-song-title ${
            currentSongId ? "currentSongId" : ""
          }`}
        >
          {song.title}
        </div>
        <div className="playlist-song-artist-name">{album?.artistName}</div>
      </div>
      <div className="playlist-song-album-title">{album?.title}</div>
      {isHovered ? (
        <>
          <DeletePlaylistSong
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            playlistSongId={playlistSongId}
            playlist={playlist}
          />
        </>
      ) : (
        <div className="song-duration">{formatSongDuration(duration)}</div>
      )}
    </div>
  );
};

export default PlaylistSongListItem;