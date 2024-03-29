import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import { fetchPlaylist, getPlaylist } from "../../../store/playlists";
import "./PlaylistShow.css";
import PlaylistShowPageHeader from "./PlaylistShowHeader";
import SearchSongs from "./SearchSongs";
import { fetchSongs } from "../../../store/songs";
import PlaylistSongListItem from "./PlaylistSongListItem/PlaylistSongListItem";
import { playQueue } from "../../../store/playbar";
import { fetchAlbums } from "../../../store/albums";

const PlaylistShow = () => {
  const dispatch = useDispatch();
  const { playlistId } = useParams();
  const playlist = useSelector(getPlaylist(playlistId));
  const playlistSongs = playlist?.playlistSongs;
  const currentUser = useSelector((state) => state.session.user);
  const [songsInThisPlaylist, setSongsInThisPlaylist] = useState([]);
  const [isDeleteSongDropdownOpen, setIsDeleteSongDropdownOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchPlaylist(playlistId));
  }, [dispatch, playlistId]);

  useEffect(() => {
    setSongsInThisPlaylist(playlistSongs)
  }, [playlistSongs])
  
  useEffect(() => {
    dispatch(fetchAlbums());
    dispatch(fetchSongs());
  }, [dispatch]);

  // play playlist song logic
  const handlePlaylistSongClick = (songId) => {
    if (isDeleteSongDropdownOpen) return;

    let currentQueueIdx = null
    let playlistQueue = []

    for (let i = 0; i < playlistSongs.length; i++) {
      if (playlistSongs[i]?.songId) {
        playlistQueue.push(playlistSongs[i].songId);
      }

      if (playlistSongs[i]?.songId === songId) currentQueueIdx = i
    }

    dispatch(playQueue(playlistQueue, currentQueueIdx));
  };

  if (!currentUser) return <Redirect to="/page-not-found" />;

  return (
    <div className="playlistShowPage">
      {playlist && currentUser && (
        <PlaylistShowPageHeader playlist={playlist} currentUser={currentUser} key={playlist}/>
      )}

      <hr />

      {playlist && songsInThisPlaylist?.length > 0 &&
        songsInThisPlaylist?.map(({playlistSongId, songId}, idx) => (
          <PlaylistSongListItem
            key={idx}
            songId={songId}
            songNum={idx + 1}
            playlist={playlist}
            playlistSongId={playlistSongId}
            handlePlaylistSongClick={() => handlePlaylistSongClick(songId)}
            isDeleteSongDropdownOpen={isDeleteSongDropdownOpen}
            setIsDeleteSongDropdownOpen={setIsDeleteSongDropdownOpen}
          />
        ))}
      <SearchSongs />
    </div>
  );
};

export default PlaylistShow;