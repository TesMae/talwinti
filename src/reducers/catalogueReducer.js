import items from "../data/productItems"

import { ALL_CATEGORIES_CLICKED, CATEGORY_FILTER_ADDED, PAGINATION_NUMBER_CLICKED } from "../constants/actionTypes"

const ITEMS_PER_PAGE = 3

const initState = {
    allItems: true,
    filteredItems: items,

    paginationArray: getPaginationArray(countPages(items.length, ITEMS_PER_PAGE)),
    currentItems: items.slice(0, ITEMS_PER_PAGE)
}

function countPages(totalItems, itemPerPage) {
    return Math.ceil(totalItems/itemPerPage)
}

function getPaginationArray(totalPages) {
    var arr = []

    for (var i = 1; i <= totalPages; i++) {
        arr.push(i)
    }

    return arr
}

function turnPages(items, currentPageNumber, papersPerPage) {
    const indexOfLastPaper = currentPageNumber * papersPerPage
    const indexOfFirstPaper = indexOfLastPaper - papersPerPage
    const newPapers = items.slice(indexOfFirstPaper, indexOfLastPaper)

    return newPapers
}

const catalogueReducer = (state = initState, action) => {
    if(action.type === ALL_CATEGORIES_CLICKED) {
        return {
            ...state, 
            allItems: true,
            filteredItems: items,
            paginationArray: getPaginationArray(countPages(items.length, ITEMS_PER_PAGE)),
            currentItems: items.slice(0, ITEMS_PER_PAGE)
        }
    }    

    if(action.type === CATEGORY_FILTER_ADDED) {
        let filteredItems = items.filter(item => item.category === action.payload)

        let newItems = turnPages(filteredItems, 1, ITEMS_PER_PAGE)

        return{
            ...state,
            allItems: false,
            filteredItems: filteredItems,
            paginationArray: getPaginationArray(countPages(filteredItems.length, ITEMS_PER_PAGE)),
            currentItems: newItems
        }        
    }

    if(action.type === PAGINATION_NUMBER_CLICKED) {
        let newItems = turnPages(state.filteredItems, Number(action.payload), ITEMS_PER_PAGE)

        return {
            ...state,
            currentItems: newItems
        }
    }

    return state
}

export default catalogueReducer