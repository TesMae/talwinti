import { ITEM_ADDED, ITEM_REMOVED } from "../constants/actionTypes"


export const addToCart = (item) => {
    return {
        type: ITEM_ADDED,
        payload: item
    }
}

export const removeFromCart = (item) => {
    return {
        type: ITEM_REMOVED,
        payload: item
    }
}