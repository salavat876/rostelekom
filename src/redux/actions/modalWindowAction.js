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