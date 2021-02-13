import {combineReducers} from "redux"
import catalogueReducer from "./reducers/catalogueReducer"
import cartReducer from "./reducers/cartReducer"

export default combineReducers({
    catalogue: catalogueReducer,
    cart: cartReducer
})
