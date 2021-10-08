import {CLOSE_MODAL_WINDOW, OPEN_MODAL_WINDOW} from "../types";

export const modalWindowAction = () => {
    return{
        type:OPEN_MODAL_WINDOW
    }
}
export const closeWindowModal = () => {
    return {
        type:CLOSE_MODAL_WINDOW
    }
}
export const openModalVolunteer = () => {
    return {
        type:'OPEN_VOLUNTEER'
    }
}
export const closeVolunteer = () => {
    return{
        type:'CLOSE_VOLUNTEER'
    }
}