import {compose, createStore} from "redux";
import {rootReducer} from "./reducers/rootReducer";
import {loadState, saveState} from "./localStorage/localStorage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const state = loadState();
export const store = createStore(rootReducer,state,composeEnhancers());
store.subscribe(()=>{
    saveState()
});