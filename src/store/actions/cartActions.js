const CART = {
  CART_ADD_PRODUCT: 'CART_ADD_PRODUCT',
  CART_REMOVE_PRODUCT: 'CART_REMOVE_PRODUCT',
}

const cartAddProduct = (product) => ({
  type: CART.CART_ADD_PRODUCT,
  product
});

const cartRemoveProduct = (product) => ({
  type: CART.CART_REMOVE_PRODUCT,
  product
});

export {cartAddProduct, cartRemoveProduct, CART}