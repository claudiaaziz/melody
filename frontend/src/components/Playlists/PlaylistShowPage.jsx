import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPlaylist, getPlaylist } from "../../store/playlists";

const PlaylistShowPage = () => {
  const dispatch = useDispatch();
  const { playlistId } = useParams();
  const playlist = useSelector(getPlaylist(playlistId));

  useEffect(() => {
    dispatch(fetchPlaylist(playlistId));
  }, [dispatch, playlistId]);

  return (
    <>
      {playlist ? (
        <p>playlistShow</p>
      ) : (
        undefined
      )}
    </>
  );
};

export default PlaylistShowPage;
