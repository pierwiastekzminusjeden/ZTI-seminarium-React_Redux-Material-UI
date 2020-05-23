import {ADD_SUCCESS, DELETE_SUCCESS, GET_SUCCESS, UPDATE_SUCCESS} from "../actions/types";


const initialState = {
    todos: [],
    lastId: 0
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_SUCCESS:
            return {
                ...state,
                todos: [...state.todos, action.payload],
                lastId: action.payload.id
            };
        case GET_SUCCESS:
            return {
                ...state,
                todos: action.payload,
                lastId: action.payload[action.payload.length - 1].id ? action.payload[action.payload.length - 1].id : 0
            };
        case DELETE_SUCCESS:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload.id)
            };
        case UPDATE_SUCCESS:
            return {
                ...state,
                todos: state.todos.map( (todo) => {
                    if(todo.id === action.payload.id)
                        return action.payload;
                    return todo;
                })
            };
        default:
            return state;
    }
}