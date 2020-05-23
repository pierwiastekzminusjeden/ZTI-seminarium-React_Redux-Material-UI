import {SET_OPEN_EDIT_DIALOG} from "../actions/types";


const initialState = {
    open: false,
    note: {id: 0, title: ""}
};

export default function(state = initialState, action) {
    switch(action.type){
        case SET_OPEN_EDIT_DIALOG:
            return {
                ...state,
                open:  action.payload.open,
                note: action.payload.note
            };
        default:
            return state;
    }
}