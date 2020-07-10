import reducer from "./index";
import { PRODUCT } from "../actions/productsActions";
import { CART } from "../actions/cartActions";

const initialState = {
  cartProducts: {
    cartList: [],
    cartCount: 0,
    cartTotalPrice: 0,
  },
  products: {
    productsList: [],
    error: false,
    loading: true,
  },
};

describe("Reducers state change", () => {
  describe("With Initial state", () => {
    it("No actions", () => {
      expect(reducer(undefined, {})).toEqual(initialState);
    });

    describe("Get Products Done Action Type", () => {
      it("With loading == false", () => {
        const reducerResult = reducer(undefined, {
          type: PRODUCT.GET_PRODUCTS_DONE,
          products: [],
          loading: false,
        });
        expect(reducerResult.products.loading).toBe(false);
      });

      it("With loading == true", () => {
        const reducerResult = reducer(undefined, {
          type: PRODUCT.GET_PRODUCTS_DONE,
          products: [],
          loading: true,
        });
        expect(reducerResult.products.loading).toBe(true);
      });

      it("With product filtering", () => {
        const reducerResult = reducer(undefined, {
          type: PRODUCT.GET_PRODUCTS_DONE,
          products: [
            {
              id: "1",
            },
            {
              id: "2",
            },
          ],
          loading: true,
        });
        expect(reducerResult.products.productsList).toHaveLength(2);
      });
    });

    it("Get Products Error Type", () => {
      const errorMessage = "Testing error message.";
      const reducerResult = reducer(undefined, {
        type: PRODUCT.GET_PRODUCTS_ERROR,
        error: errorMessage,
      });

      expect(reducerResult).toEqual({
        ...initialState,
        products: {
          ...initialState.products,
          error: errorMessage,
        },
      });
    });

    it("Add Product to Cart", () => {
      const product = {
        name: "VESTIDO TRANSPASSE BOW",
        style: "20002605",
        code_color: "20002605_613",
        color_slug: "tapecaria",
        color: "TAPEÇARIA",
        on_sale: false,
        regular_price: "R$ 199,90",
        actual_price: "R$ 199,90",
        discount_percentage: "",
        installments: "3x R$ 66,63",
        image:
          "https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912",
        sizes: [
          {
            available: false,
            size: "PP",
            sku: "5807_343_0_PP",
          },
          {
            available: true,
            size: "P",
            sku: "5807_343_0_P",
          },
          {
            available: true,
            size: "M",
            sku: "5807_343_0_M",
          },
          {
            available: true,
            size: "G",
            sku: "5807_343_0_G",
          },
          {
            available: false,
            size: "GG",
            sku: "5807_343_0_GG",
          },
        ],
      };

      const action = {
        type: CART.CART_ADD_PRODUCT,
        product,
        size: {
          size: "M",
          sku: "5807_343_0_M",
        },
      };

      const reducerResult = reducer(undefined, action);
      expect(reducerResult.cartProducts.cartList).toHaveLength(1);
      expect(reducerResult.cartProducts.cartCount).toBe(1);
      expect(reducerResult.cartProducts.cartTotalPrice).toBe(199.9);
    });
  });

  describe("Modify state by", () => {
    const state = {
      cartProducts: {
        cartList: [
          {
            name: "REGATA ALCINHA FOLK",
            style: "20002570",
            code_color: "20002570_614",
            color_slug: "preto",
            color: "PRETO",
            on_sale: false,
            regular_price: "R$ 99,90",
            actual_price: "R$ 99,90",
            discount_percentage: "",
            installments: "3x R$ 33,30",
            image:
              "https://d3l7rqep7l31az.cloudfront.net/images/products/20002570_002_catalog_1.jpg?1459948578",
            sizes: [
              {
                available: true,
                size: "PP",
                sku: "5723_40130843_0_PP",
              },
              {
                available: true,
                size: "P",
                sku: "5723_40130843_0_P",
              },
              {
                available: true,
                size: "M",
                sku: "5723_40130843_0_M",
              },
              {
                available: true,
                size: "G",
                sku: "5723_40130843_0_G",
              },
              {
                available: true,
                size: "GG",
                sku: "5723_40130843_0_GG",
              },
            ],
          },
        ],
        cartCount: 1,
        cartTotalPrice: 99.9,
      },
      products: {
        productsList: [],
        error: false,
        loading: true,
      },
    };

    it("Adding and removing product from Cart", () => {
      const product = {
        name: "VESTIDO TRANSPASSE BOW",
        style: "20002605",
        code_color: "20002605_613",
        color_slug: "tapecaria",
        color: "TAPEÇARIA",
        on_sale: false,
        regular_price: "R$ 199,90",
        actual_price: "R$ 199,90",
        discount_percentage: "",
        installments: "3x R$ 66,63",
        image:
          "https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912",
        sizes: [
          {
            available: false,
            size: "PP",
            sku: "5807_343_0_PP",
          },
          {
            available: true,
            size: "P",
            sku: "5807_343_0_P",
          },
          {
            available: true,
            size: "M",
            sku: "5807_343_0_M",
          },
          {
            available: true,
            size: "G",
            sku: "5807_343_0_G",
          },
          {
            available: false,
            size: "GG",
            sku: "5807_343_0_GG",
          },
        ],
      };

      const size = {
        size: "M",
        sku: "5807_343_0_M",
      };

      const addAction = {
        type: CART.CART_ADD_PRODUCT,
        product,
        size,
      };

      let newState = reducer(state, addAction);
      expect(newState.cartProducts.cartList).toHaveLength(2);
      expect(newState.cartProducts.cartCount).toBe(2);
      expect(newState.cartProducts.cartTotalPrice).toBe(99.9 + 199.9);

      const removeAction = {
        type: CART.CART_REMOVE_PRODUCT,
        product,
        size,
      };

      newState = reducer(newState, removeAction);
      expect(newState.cartProducts.cartList).toHaveLength(1);
      expect(newState.cartProducts.cartCount).toBe(1);
      expect(newState.cartProducts.cartTotalPrice).toBe(99.9);
    });

    it("Adding products of same size and removing them all", () => {
      const product = {
        name: "VESTIDO TRANSPASSE BOW",
        style: "20002605",
        code_color: "20002605_613",
        color_slug: "tapecaria",
        color: "TAPEÇARIA",
        on_sale: false,
        regular_price: "R$ 199,90",
        actual_price: "R$ 199,90",
        discount_percentage: "",
        installments: "3x R$ 66,63",
        image:
          "https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912",
        sizes: [
          {
            available: false,
            size: "PP",
            sku: "5807_343_0_PP",
          },
          {
            available: true,
            size: "P",
            sku: "5807_343_0_P",
          },
          {
            available: true,
            size: "M",
            sku: "5807_343_0_M",
          },
          {
            available: true,
            size: "G",
            sku: "5807_343_0_G",
          },
          {
            available: false,
            size: "GG",
            sku: "5807_343_0_GG",
          },
        ],
      };

      let currentState = {
        ...initialState,
        products: {
          ...initialState.products,
          productsList: [product],
        },
      };

      for (let index = 0; index < 2; index++) {
        currentState = reducer(currentState, {
          type: CART.CART_ADD_PRODUCT,
          product,
          size: {
            available: true,
            size: "PP",
            sku: "5807_343_0_PP",
          },
        });
      }

      expect(currentState.cartProducts.cartList).toHaveLength(1);
      expect(currentState.cartProducts.cartCount).toBe(2);
      expect(currentState.cartProducts.cartTotalPrice).toBe(199.9 * 2);

      currentState = reducer(currentState, {
        type: CART.CART_REMOVE_ALL_PRODUCT,
        product,
        size: {
          available: false,
          size: "PP",
          sku: "5807_343_0_PP",
        },
      });

      expect(currentState.cartProducts.cartList).toHaveLength(0);
      expect(currentState.cartProducts.cartCount).toBe(0);
      expect(currentState.cartProducts.cartTotalPrice).toBe(0);
    });
  });
});
