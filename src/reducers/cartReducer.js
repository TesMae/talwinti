import { ITEM_ADDED, ITEM_REMOVED } from "../constants/actionTypes"

const initState = {
    addedItems: [],
    itemsCounter: 0
}

const cartReducer = (state = initState, action) => {
    if(action.type === ITEM_ADDED) {
        const foundedItem = state.addedItems.find(item => item.id === action.payload.id)
        
        if(foundedItem === undefined) {
            const newItems = [...state.addedItems, action.payload]

            return {
                ...state,
                addedItems: newItems,
                itemsCounter: newItems.length
            }
        } 
    }

    if (action.type === ITEM_REMOVED) {
        let foundedItem = state.addedItems.find(item => item.id === action.payload.id)
        let newItems = state.addedItems.filter(item => item !== foundedItem)

        return {
            ...state,
            addedItems: newItems,
            itemsCounter: newItems.length,
        }
    }

    return state
}

export default cartReducer