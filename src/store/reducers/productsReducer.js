import { PRODUCT } from "../actions/productsActions";

const initialState = {
  productsList: [],
  error: false,
  loading: true
}
const products = (state = initialState, action) => {
  switch(action.type){  
    case PRODUCT.GET_PRODUCTS_DONE:
      const products = [...action.products.filter(product => product.id !== 'NaN')]
      localStorage.setItem('products', JSON.stringify({productsList: products}))

      return {
        ...state, 
        productsList: products,
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