import userReducer from "./user/user.reducer";
import CartReducer from "./cart/cart.reducer.js";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const persistConfig = {
    key: 'root',
    storage,
    whilelist: ['cart']
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: CartReducer
})

export default persistReducer(persistConfig, rootReducer);