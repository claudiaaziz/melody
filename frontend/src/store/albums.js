export const RECEIVE_ALBUMS = `posts/RECEIVE_ALBUMS`;

const receiveAlbums = (albums) => ({
  type: RECEIVE_ALBUMS,
  albums,
});

export const getAlbums = (state) => state.albums ? state.albums : []

export const fetchAlbums = () => async (dispatch) => {
  const res = await fetch("/api/albums");

  // if (res.ok) {
    const albums = await res.json();
    dispatch(receiveAlbums(albums));
  // }
};

const albumsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALBUMS:
      return { ...action.albums };
    default:
      return state;
  }
};

export default albumsReducer;