export const AddToCart = (product, quantity) => {
    return {
        type: 'ADD_TO_CART',
        payload: {
            product,
            quantity
        }
    };
};

// Action for removing a product from the cart
export const RemoveFromCart = (productId) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: productId
    };
};

export const ResetCart = () => {
    return {
        type : 'RESET_CART'
    }
}
export const LoadCartItems = (items) => ({
    type: 'LOAD_CART_ITEMS',
    payload: items,
});