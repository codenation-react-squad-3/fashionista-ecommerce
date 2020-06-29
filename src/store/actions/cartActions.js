const CART = {
  CART_ADD_PRODUCT: 'CART_ADD_PRODUCT',
  CART_REMOVE_PRODUCT: 'CART_REMOVE_PRODUCT',
}

const cartAddProduct = (product, size) => ({
  type: CART.CART_ADD_PRODUCT,
  product,
  size
});

const cartRemoveProduct = (product, size) => ({
  type: CART.CART_REMOVE_PRODUCT,
  product,
  size
});

export {cartAddProduct, cartRemoveProduct, CART}