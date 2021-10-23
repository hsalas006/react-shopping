import {cartActionTypes} from "./cart.types";

export const toggleCardHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type: cartActionTypes.ADD_ITEM_TO_CART,
    payload: item
})