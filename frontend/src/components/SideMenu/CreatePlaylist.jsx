import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createPlaylist, getPlaylists } from '../../store/playlists';
import { useHistory } from 'react-router-dom';
import { ReactComponent as CreatePlaylistIcon } from "../../static/LogoAndSVGS/sideMenu/createPlaylist.svg";
import { ReactComponent as PlusIcon } from "../../static/LogoAndSVGS/sideMenu/plus.svg";

const CreatePlaylist = ({setRedirectToPlaylist, setCreatedPlaylist}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector((state) => state.session.user);
  const playlists = useSelector(getPlaylists);
  const [isCreatePlaylistOpen, setCreatePlaylistOpen] = useState(false);
  
  const toggleCreatePlaylist = () =>
    setCreatePlaylistOpen(!isCreatePlaylistOpen);
  const closeCreatePlaylistModal = () => setCreatePlaylistOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isCreatePlaylistOpen) {
        closeCreatePlaylistModal();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isCreatePlaylistOpen]);

  const handleCreatePlaylist = async () => {
    const amtPlaylists = Object.values(playlists).length;
    const createPlaylistData = {
      name: `My Playlist #${amtPlaylists + 1}`,
      user_id: currentUser.id,
    };

    const playlist = await dispatch(createPlaylist(createPlaylistData));

    if (playlist) {
      setCreatedPlaylist(playlist);
      setRedirectToPlaylist(true);
    }
  };

  return (
    <>
      <button className="plusButton" onClick={toggleCreatePlaylist}>
        <PlusIcon />
      </button>
      {isCreatePlaylistOpen && (
        <div
          className="createPlaylistDropdown"
          onClick={() => {
            if (currentUser) {
              handleCreatePlaylist();
            } else {
              history.push("/signup");
            }
          }}
        >
          <div className="createPlaylist">
            <CreatePlaylistIcon />
            <p className="create-a-new-playlist">
              Create a new playlist
            </p>
          </div>
        </div>
        )}
    </>
  )
}

export default CreatePlaylist