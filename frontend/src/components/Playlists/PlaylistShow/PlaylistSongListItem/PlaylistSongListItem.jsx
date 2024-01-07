import { useState } from "react";
import { useSelector } from "react-redux";
import { getAlbum } from "../../../../store/albums";
import DeletePlaylistSong from "./DeletePlaylistSong/DeletePlaylistSong";
import { fetchSongDuration, formatSongDuration } from "../../../../utils/fetchAndFormatSongDuration"; 
import "./PlaylistSongListItem.css";
import { getSong } from "../../../../store/songs";

const PlaylistSongListItem = ({
  songId,
  songNum,
  handlePlaylistSongClick,
  playlist,
  playlistSongId,
  isDeleteSongDropdownOpen,
  setIsDeleteSongDropdownOpen
}) => {
  const song = useSelector(getSong(songId))
  const currentQueueIdx = useSelector(
    (state) => state.playbar.currentQueueIdx
  );
  const currentSongId = useSelector(
    (state) => state.playbar.queue[currentQueueIdx] === song?.id
  );
  const albumId = song?.albumId;
  const album = useSelector(getAlbum(albumId));

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const [duration, setDuration] = useState(null);
  song?.songUrl && fetchSongDuration(song.songUrl, setDuration); 

  return (
    <div
      className="playlist-song-list-item"
      onClick={handlePlaylistSongClick}
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
          {song?.title}
        </div>
        <div className="playlist-song-artist-name">{album?.artistName}</div>
      </div>
      <div className="playlist-song-album-title">{album?.title}</div>
      <div className="song-duration">{formatSongDuration(duration)}</div>
      {isHovered && (
        <DeletePlaylistSong
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          playlistSongId={playlistSongId}
          playlist={playlist}
          isDeleteSongDropdownOpen={isDeleteSongDropdownOpen}
          setIsDeleteSongDropdownOpen={setIsDeleteSongDropdownOpen}
        />
      )}
    </div>
  );
};

export default PlaylistSongListItem;