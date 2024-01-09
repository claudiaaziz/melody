import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AlbumSongListItem from "./AlbumSongListItem/AlbumSongListItem.jsx";
import AlbumShowHeader from "./AlbumShowHeader.jsx";
import SignUpModal from "../../SignupAndLogin/SignUpModal/index.jsx";
import { fetchAlbum, getAlbum } from "../../../store/albums.js";
import { getSongs } from "../../../store/songs.js";
import { playQueue } from "../../../store/playbar.js";
import "./AlbumShow.css";

const AlbumShow = () => {
  const dispatch = useDispatch();
  const { albumId } = useParams();
  
  useEffect(() => {
    dispatch(fetchAlbum(albumId));
  }, [dispatch, albumId]);
  
  const currentUser = useSelector((state) => state.session.user);
  const album = useSelector(getAlbum(albumId));
  const songs = useSelector(getSongs);
  
  const albumSongs = album?.albumSongs?.map((songId) => songs[songId]);

  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  // play album songs 
  const handleAlbumSongClick = (songId) => {
    if (currentUser) {
      const currentQueueIdx = album.albumSongs.indexOf(songId)
      dispatch(playQueue(album.albumSongs, currentQueueIdx));
    } else {
      setIsSignUpModalOpen(true);
    }
  };

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
                artistName={album.artistName}
                handleAlbumSongClick={() => handleAlbumSongClick(song.id)}
              />
            ))}
        {isSignUpModalOpen && (
          <SignUpModal closeSignUpModal={() => setIsSignUpModalOpen(false)} />
        )}
      </div>
  );
};

export default AlbumShow;