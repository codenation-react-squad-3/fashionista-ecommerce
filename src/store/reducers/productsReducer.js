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
        productsList: [...action.products],
        loading: action.loading
      }

    default:
      return state;
  }
}

export default products