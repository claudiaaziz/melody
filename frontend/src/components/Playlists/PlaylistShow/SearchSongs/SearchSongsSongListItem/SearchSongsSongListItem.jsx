import { useParams } from "react-router-dom";
import "./SearchSongsSongListItem.css";
import { useDispatch, useSelector } from "react-redux";
import { getAlbum } from "../../../../../store/albums"
import { createPlaylistSong } from "../../../../../store/playlists";

const SearchSongsSongListItem = ({ song }) => {
  const dispatch = useDispatch();
  const { playlistId } = useParams()

  const albumId = song.albumId;
  const album = useSelector(getAlbum(albumId));

  const handleCreatePlaylistSong = () => {
    dispatch(createPlaylistSong(song.id, playlistId));
  }

  return (
    <div className="search-songs-song-list-item">
      <img className="albumCoverUrl" src={album?.albumCoverUrl} alt="" />
      <div className="title-and-name">
        <div className="songTitle">{song?.title}</div>
        <div className="artistName">{album?.artistName}</div>
      </div>
      <div className="search-songs-album-title">{album?.title}</div>
      <button className="add-song" onClick={handleCreatePlaylistSong}>
        Add
      </button>
    </div>
  );
};

export default SearchSongsSongListItem;
