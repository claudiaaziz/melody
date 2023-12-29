import React, { useState, useEffect } from "react";
import "./PlaylistSongListItem.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums, getAlbum } from "../../../../store/albums";
import { ReactComponent as DotsIcon } from "../../../../static/LogoAndSVGS/dots.svg";
import { ReactComponent as TrashIcon } from "../../../../static/LogoAndSVGS/playlists/removeSong.svg";
import { deletePlaylistSong } from "../../../../store/playlists";

const PlaylistSongListItem = ({
  artistName,
  song,
  songNum,
  onClick,
  playlist,
  playlistSongId,
  boolean,
}) => {
  const currentQueueIdx = useSelector((state) => state.playbar.currentQueueIdx);
  const currentSongId = useSelector(
    (state) => state.playbar.queue[currentQueueIdx] === song.id
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

  const albumId = song.albumId;
  const album = useSelector(getAlbum(albumId));
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const [isDeleteSongOpen, setIsDeleteSongOpen] = useState(false);
  const toggleDeleteSong = () => setIsDeleteSongOpen(!isDeleteSongOpen);

  // delete playlist song
  const handleDeletePlaylistSong = () => {
    dispatch(deletePlaylistSong(playlistSongId, playlist.id));
    boolean(true);
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
          <DotsIcon className="dotsIcon" onClick={toggleDeleteSong} />
          {isDeleteSongOpen && (
            <div
              className="remove-playlist-song-dropdown"
              onClick={handleDeletePlaylistSong}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="removeSong">
                <TrashIcon />
                <p>Remove from this playlist</p>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="song-duration">{formatDuration(duration)}</div>
      )}
    </div>
  );
};

export default PlaylistSongListItem;
