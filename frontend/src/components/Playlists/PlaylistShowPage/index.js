import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import { fetchPlaylist, getPlaylist } from "../../../store/playlists";
import "./PlaylistShowPage.css";
import PlaylistShowPageHeader from "./PlaylistShowPageHeader";
import SearchSongs from "./SearchSongs";
import { fetchPlaylistSongs, getPlaylistSongs } from "../../../store/playlistSongs";
import { fetchSong, fetchSongs, getSong, getSongs } from "../../../store/songs";
// import PlaylistShowPageSongListItem from "./PlaylistShowPageSongListItem";

const PlaylistShowPage = () => {
  const dispatch = useDispatch();
  const { playlistId } = useParams();
  // console.log("eff" , playlistId)
  const playlist = useSelector(getPlaylist(playlistId))
  const playlistSongs = useSelector(getPlaylistSongs);
  // console.log("playlist_songs", playlistSongs)
  const currentUser = useSelector((state) => state.session.user);
  const songs = useSelector(getSongs)
  // console.log("songs", songs)

    // const first = Object.values(playlistSongs)[0]
    // console.log("first", first)
    // const song = useSelector(getSong(first.songId))
  
  useEffect(() => {
    dispatch(fetchPlaylistSongs());
  }, [dispatch]);

    useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  // const songsInThisPlaylist = Object.values(playlistSongs).filter((song) => (
  //   (song.playlistId === Number(playlistId))
  // ));

  // console.log("songsInThisPlaylist", songsInThisPlaylist)
  
  // const filteredSongs = Object.values(songs).filter((song) => {
  //   return song.id 
  // })

  // useEffect(() => {
  //   dispatch(fetchSong(first?.songId));
  // }, [first.songId]);

  // const playlistSongsSongs = Object.values(songs).filter((song) => 


  //   const playlistSongsSongs = Object.values(playlistSongs).filter((playlistSongsSong) =>
  //     playlistSongsSong.id === 
  //   );





  
  if (!currentUser) return <Redirect to="/" />;
  
  // const handleSongClick = (songId) => {
    //  dispatch(playQueue(songId, playlistId));
    // };
    
    // const playlistSongs = Object.values(playlistSongs).map((playlistSong) =>
    //   console.log(playlistSong)
    // );
    


  return (
    <div className="playlistShowPage">
      {playlist && currentUser && (
        <PlaylistShowPageHeader playlist={playlist} currentUser={currentUser} />
      )}

{/* <div>{song}</div> */}
      

      {/* <div>
        {Object.values(playlistSongs).map((playlistSong) =>
        playlistSong
    )}
    </div> */}

      <hr />



      {/* {playlist &&
        Object.values(playlist.songs).map((song, idx) => (
          <PlaylistShowPageSongListItem
            key={song.id}
            song={song}
            songNum={idx + 1}
            artistName={song.artistName}
            onClick={() => handleSongClick(song.id)}
          />
        ))} */}
      {}
      <SearchSongs />
    </div>
  );
};

export default PlaylistShowPage;