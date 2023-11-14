export const RECEIVE_ALBUMS = `posts/RECEIVE_ALBUMS`;
export const RECEIVE_ALBUM = `posts/RECEIVE_ALBUM`;

const receiveAlbums = (albums) => ({
  type: RECEIVE_ALBUMS,
  albums,
});
const receiveAlbum = (album) => ({
  type: RECEIVE_ALBUM,
  album,
});

export const getAlbums = (state) => (state.albums ? state.albums : []);
export const getAlbum = (albumId) => state => (state.albums ? state.albums[albumId] : null);

export const fetchAlbums = () => async (dispatch) => {
  const res = await fetch("/api/albums");

  const albums = await res.json();
  dispatch(receiveAlbums(albums));
};

export const fetchAlbum = () => async (dispatch) => {
  const res = await fetch(`/api/albums/${}`);

  const albums = await res.json();
  dispatch(receiveAlbums(albums));
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
