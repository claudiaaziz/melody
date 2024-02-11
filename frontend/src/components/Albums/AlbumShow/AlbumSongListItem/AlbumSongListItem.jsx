import { useState } from "react";
import "./AlbumSongListItem.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongDuration } from "../../../../utils/fetchSongDuration";
import { formatDuration } from "../../../../utils/formatDuration";
import { playQueue } from "../../../../store/playbar"
import SignUpModal from "../../../SignupAndLogin/SignUpModal";

const AlbumSongListItem = ({ album, song, songNum }) => {
  const dispatch = useDispatch();
  const currentQueueIdx = useSelector((state) => state.playbar.currentQueueIdx);
  const currentSongId = useSelector(
    (state) => state.playbar.queue[currentQueueIdx] === song.id
  );
    
  const [duration, setDuration] = useState(null);
  song.songUrl && fetchSongDuration(song.songUrl, setDuration); 
    
  const currentUser = useSelector((state) => state.session.user);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const handleAlbumSongClick = (songId) => {
    if (currentUser) {
      const currentQueueIdx = album.albumSongs.indexOf(songId)
      dispatch(playQueue(album.albumSongs, currentQueueIdx));
    } else {
      setIsSignUpModalOpen(true);
    }
  };

  return (
    <>
      <ul className="songListItem" onClick={() => handleAlbumSongClick(song.id)}>
        <li>
          <div className={`songNum ${currentSongId && "currentSongId"}`}>
            {songNum}
          </div>
          <div className="songContent">
            <div className={`songTitle ${currentSongId && "currentSongId"}`}>
              {song.title}
            </div>
            <div className="artistName">{album.artistName}</div>
          </div>
          <div className="songDuration">{formatDuration(duration)}</div>
        </li>
      </ul>
      {isSignUpModalOpen && (
        <SignUpModal closeSignUpModal={() => setIsSignUpModalOpen(false)} />
      )}
    </>
  );
};

export default AlbumSongListItem;