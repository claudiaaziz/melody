import React, { useEffect } from "react";
import { ReactComponent as CreatePlaylistIcon } from "../../static/LogoAndSVGS/sideMenu/createPlaylist.svg";
import { useDispatch, useSelector } from "react-redux";
import { createPlaylist, fetchPlaylists, getPlaylists } from "../../store/playlists";

const CreatePlaylistDropdown = ({ onClose }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  const playlists = useSelector(getPlaylists);

  const handleCreatePlaylist = async () => {
    const amtPlaylists = Object.values(playlists).length;
    const createPlaylistData = {
      name: `My Playlist #${amtPlaylists + 1}`,
      user_id: currentUser.id,
    };

    const playlist = await dispatch(createPlaylist(createPlaylistData));

    if (playlist) {
      onClose(playlist);
    }
  };

  useEffect(() => {
    if (currentUser) dispatch(fetchPlaylists());
  }, [dispatch, currentUser]);

  return (
    <div className="createPlaylistDropdown" onClick={handleCreatePlaylist}>
      <div className="createPlaylist">
        <CreatePlaylistIcon />
        Create a new playlist
      </div>
    </div>
  );
};

export default CreatePlaylistDropdown;
