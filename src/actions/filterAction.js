import { CATEGORY_FILTER_ADDED, ALL_CATEGORIES_CLICKED } from "../constants/actionTypes"

export const filterByCategory=(categoryName) => {
    return{
        type: CATEGORY_FILTER_ADDED,
        payload: categoryName
    }
}

export const displayAllCategory=() => {
    return{
        type: ALL_CATEGORIES_CLICKED,
        payload: null
    }
}