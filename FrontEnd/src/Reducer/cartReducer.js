const initialState = {
    cartItems: [],   // List of products added to the cart
    totalAmount: 0,  // Total cost of all products in the cart
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const newItem = action.payload.product;
            const quantity = action.payload.quantity;

            // Check if the product is already in the cart
            const existingItem = state.cartItems.find(item => item.id === newItem.id);

            if (!existingItem) {
                // If the product is not already in the cart, add it
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...newItem, quantity }],
                    totalAmount: state.totalAmount + newItem.price * quantity,
                };
            } else {
                // If product is already in the cart, increase its quantity
                return {
                    ...state,
                    cartItems: state.cartItems.map(item =>
                        item.id === newItem.id
                            ? { ...item, quantity: item.quantity + quantity }
                            : item
                    ),
                    totalAmount: state.totalAmount + newItem.price * quantity,
                };
            }
        }
        case 'LOAD_CART_ITEMS':
            return {
                ...state,
                cartItems: action.payload,
            };

        case 'REMOVE_FROM_CART': {
            const productId = action.payload;
            const product = state.cartItems.find(item => item.id === productId);

            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== productId),
                totalAmount: state.totalAmount - product.price * product.quantity,
            };
        }
        case 'RESET_CART': {
            return {
                cartItems: [],
                totalAmount: 0,
            };
        }

        default:
            return state;
    }
};

export default cartReducer;
