import {ADD_SUCCESS, DELETE_SUCCESS, GET_MESSAGE, UPDATE_SUCCESS} from "../actions/types";

const initialState = {
    message: null
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_MESSAGE:
            return {
                message: action.payload.message
            };
        case ADD_SUCCESS:
            return {
                message: "Added"
            };
        case UPDATE_SUCCESS:
            return {
                message: "Updated"
            };
        case DELETE_SUCCESS:
            return {
                message: "Deleted"
            };
        default:
            return state;
    }
};