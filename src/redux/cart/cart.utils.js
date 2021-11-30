export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(elm => elm.id === cartItemToAdd.id);

    if(existingCartItem){
        return cartItems.map(elm => existingCartItem.id === elm.id ? { ...elm, quantity:elm.quantity + 1 } : elm);
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find(item => item.id === itemToRemove.id);

    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
    }

    return cartItems.map(cartItem => 
        cartItem.id === itemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
        )
}