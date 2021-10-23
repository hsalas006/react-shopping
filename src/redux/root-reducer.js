import userReducer from "./user/user.reducer";
import CartReducer from "./cart/cart.reducer.js";

import { combineReducers } from "redux";

export default combineReducers({
    user: userReducer,
    cart: CartReducer
})