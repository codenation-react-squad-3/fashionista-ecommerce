const PRODUCT = {
   GET_PRODUCTS_START: 'GET_PRODUCTS_START',
   GET_PRODUCTS_DONE: 'GET_PRODUCTS_DONE',
   GET_PRODUCTS_ERROR: 'GET_PRODUCTS_ERROR'
}

const fetchStart = () => ({
   type: PRODUCT.GET_PRODUCTS_START
})

const fetchDone = (products) => ({
   type: PRODUCT.GET_PRODUCTS_DONE,
   products,
   loading: false
})

const fetchError = () => ({
   type: PRODUCT.GET_PRODUCTS_ERROR,
   error: true
})

const fetchProductsService = () => async dispatch => {
   dispatch(fetchStart());
   await fetch('https://undefined.netlify.app/api/catalog')
      .then(res => res.json())
      .then(res => dispatch(fetchDone(res)))
      .catch(() => dispatch(fetchError()))
}

export {fetchProductsService, PRODUCT}
