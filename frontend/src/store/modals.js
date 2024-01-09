export const TOGGLE_EDIT_PLAYLIST_MODAL = "TOGGLE_EDIT_PLAYLIST_MODAL";

export const toggleEditPlaylistModal = (boolean) => ({
  type: TOGGLE_EDIT_PLAYLIST_MODAL,
  boolean
});

const initialState = {
  isEditPlaylistModalOpen: false,
};

const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_EDIT_PLAYLIST_MODAL:
      return {
        ...state,
        isEditPlaylistModalOpen: action.boolean,
      };
    default:
      return state;
  }
};

export default modalsReducer;