import {OPEN_MODAL_WINDOW} from "../types";

const initialState = {
    isOpen:false
}

export const modalWindowReducer = (state = initialState, action) => {
    switch (action.type){
        case OPEN_MODAL_WINDOW:{
            return {...state,isOpen: true}
        }
        default:return state
    }
}