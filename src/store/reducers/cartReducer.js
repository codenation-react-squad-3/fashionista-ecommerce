import { CART } from "../actions/cartActions";

const initialState = {
  cartList: [],
  cartCount: 0
}
const cartProducts = (state = initialState, action) => {
  switch(action.type){
      
    case CART.CART_ADD_PRODUCT:
        return {
          ...state, 
          cartList: [ ...state.cartList, action.product ],
          cartCount: state.cartCount + 1
        }

    // Remover está com problema    
    case CART.CART_REMOVE_PRODUCT:
      const productIndex = state.cartList.findIndex(product => product.code_color === action.product.code_color);

      return {
        ...state, 
        cartList: [...state.cartList.splice(productIndex, 1)],
        cartCount: state.cartCount - 1
      }

    default:
      return state;
  }
}

export default cartProducts