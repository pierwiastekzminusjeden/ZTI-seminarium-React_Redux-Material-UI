import {GET_MESSAGE, SET_OPEN_EDIT_DIALOG} from "./types";

export const setOpen = (open, note) => (dispatch) => {
    dispatch({
        type: SET_OPEN_EDIT_DIALOG,
        payload: {
            open: open,
            note: note
        }
    })
};

export const setMessage = (message) => (dispatch) => {
    dispatch({
        type: GET_MESSAGE,
        payload: {
            message: message
        }
    })
};


