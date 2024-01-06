import { useSelector } from "react-redux";
import { getAlbum } from "../../store/albums";

const CurrentSongContainer = () => {
  const currentQueueIdx = useSelector((state) => state.playbar.currentQueueIdx);
  const currentSongId = useSelector(
    (state) => state.playbar.queue[currentQueueIdx]
  );
  const songs = useSelector((state) => state?.songs);
  const currentSong = Object.values(songs).find(
    (song) => song.id === currentSongId
  );
  const currentAlbumId = currentSong?.albumId
  const album = useSelector(getAlbum(currentAlbumId));

  return (
    <>
      {currentSongId ? (
        <div className="currentSongContainer">
          <img
            src={album?.albumCoverUrl}
            alt=""
            className="currentSongAlbumCover"
          />
          <div className="currentSongDetails">
            <span className="currentSongTitle">{currentSong?.title}</span>
            <span className="currentSongArtistName">{album?.artistName}</span>
          </div>
        </div>
      ) : (
        <div className="currentSongContainer"></div>
      )}
    </>
  )
}

export default CurrentSongContainer