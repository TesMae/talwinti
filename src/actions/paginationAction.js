import { PAGINATION_NUMBER_CLICKED } from "../constants/actionTypes"

export const displayNewPage=(pageNumber) => {
    return{
        type: PAGINATION_NUMBER_CLICKED,
        payload: pageNumber
    }
}