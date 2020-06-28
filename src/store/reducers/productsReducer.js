import { PRODUCT } from "../actions/productsActions";

const initialState = {
  productsList: [],
  error: false,
  loading: true
}
const products = (state = initialState, action) => {
  switch(action.type){  
    case PRODUCT.GET_PRODUCTS_DONE:
      return {
        ...state, 
        productsList: [...action.products.filter(product => product.id !== 'NaN')],
        loading: action.loading
      }

      case PRODUCT.GET_PRODUCTS_ERROR:
        return {
          ...state,
          productsList: [],
          error: action.error
        }
      default:
        return state;
  }
}

export default products