import {combineReducers} from "redux";
import {initReducer} from "./initReducer";
import {modalWindowReducer} from "./modalWindowReducer";

export const rootReducer = combineReducers({
    posts:initReducer,
    window:modalWindowReducer
})