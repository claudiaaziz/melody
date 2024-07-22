export const OPEN_MODAL = 'ui/OPEN_MODAL';
export const CLOSE_MODAL = 'ui/CLOSE_MODAL';

export const openModal = (modalTitle, props) => ({
    type: OPEN_MODAL,
    payload: { modalTitle, props },
});

export const closeModal = () => ({
    type: CLOSE_MODAL,
});

const initialState = {
    modal: null,
};

export default function uiReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return { ...state, modal: { ...action.payload } };
        case CLOSE_MODAL:
            return { ...state, modal: null };
        default:
            return state;
    }
}
