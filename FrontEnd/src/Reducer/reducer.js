const initialState = {
    shoeList : []
}

const ProductReducer = (state = initialState, action)=> {
    switch(action.type) {
        case 'SHOE_LIST': {
            return {
                ...state, shoeList:action.payload
            }
        }
        default : return state
    }
}
export default ProductReducer;