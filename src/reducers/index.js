import {combineReducers} from "redux";
import messages from './messages';
import todos from "./todos";
import eventBus from "./eventBus";

export default combineReducers({
    todos,
    messages,
    eventBus
});