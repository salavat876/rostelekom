import {CLOSE_MODAL_WINDOW, OPEN_MODAL_WINDOW} from "../types";

const initialState = {
    isOpen:false,
    isOpenVolunteer:false
}

export const modalWindowReducer = (state = initialState, action) => {
    switch (action.type){
        case OPEN_MODAL_WINDOW:{
            return {...state,isOpen: true}
        }
        case CLOSE_MODAL_WINDOW: {
            return {...state,isOpen: false}
        }
        case 'OPEN_VOLUNTEER':{
            return {...state,isOpenVolunteer: true}
        }
        case 'CLOSE_VOLUNTEER':{
            return {...state,isOpenVolunteer: false}
        }
        default:return state
    }
}