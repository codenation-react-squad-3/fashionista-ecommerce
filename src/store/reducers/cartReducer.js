import { CART } from "../actions/cartActions";

const initialState = {
  cartList: [],
  cartCount: 0,
  cartTotalPrice: 0
}
const cartProducts = (state = initialState, action) => {
  switch (action.type) {
    case CART.CART_ADD_PRODUCT:
      let newCartList = [...state.cartList];
      let isSizeAlreadyChosen = false;

      newCartList.map(product => {
        if (product.sku === action.size.sku) {
          product.productCount += 1;
          isSizeAlreadyChosen = true;
        }
      })

      if (isSizeAlreadyChosen) {
        return {
          ...state,
          cartList: [...newCartList],
          cartCount: state.cartCount + 1,
          cartTotalPrice: state.cartTotalPrice + parseFloat(action.product.actual_price.split(' ')[1].replace(',', '.'))
        }
      } else {
        return {
          ...state,
          cartList: [...state.cartList,
          {
            product: action.product,
            sku: action.size.sku,
            size: action.size.size,
            productCount: 1
          }
          ],
          cartCount: state.cartCount + 1,
          cartTotalPrice: state.cartTotalPrice + parseFloat(action.product.actual_price.split(' ')[1].replace(',', '.'))
        }
      }

    case CART.CART_REMOVE_PRODUCT:
      let removedCartList = [...state.cartList];
      let repeatedSize = false;

      removedCartList.map(product => {
        if (product.productCount > 1 && product.sku === action.size.sku) {
          product.productCount -= 1;
          repeatedSize = true;
        }
      })

      if (!repeatedSize) {
        const productIndex = removedCartList.findIndex(product => product.sku === action.size.sku);
        removedCartList.splice(productIndex, 1);
      }

      return {
        ...state,
        cartList: [...removedCartList],
        cartCount: state.cartCount - 1,
        cartTotalPrice: state.cartTotalPrice - parseFloat(action.product.actual_price.split(' ')[1].replace(',', '.'))
      }

    default:
      return state;
  }
}

export default cartProducts