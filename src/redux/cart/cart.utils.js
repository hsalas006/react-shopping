export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(elm => elm.id === cartItemToAdd.id);

    if(existingCartItem){
        return cartItems.map(elm => existingCartItem.id === elm.id ? { ...elm, quantity:elm.quantity + 1 } : elm);
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}