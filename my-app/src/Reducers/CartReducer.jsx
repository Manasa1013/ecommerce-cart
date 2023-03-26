export function CartReducer(state, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "ADD_TO_CART":
      console.log(state.cart);
      return {
        ...state,
        cart: [
          {
            ...action.payload,
            isAdded: !action.payload.isAdded,
            count: 1,
          },
          ...state.cart,
        ],
      };
    case "INC_IN_CART":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            // console.log("from incHandler,item's count:", item.count);
            return { ...item, count: item.count + 1 };
          }
          return item;
        }),
      };
    case "DEC_IN_CART":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            if (item.count > 1) {
              // console.log("from DecreaseHandler,item's count:", item.count);
              return { ...item, count: item.count - 1 };
            }
          }
          return item;
        }),
      };
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        products: state.products.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, isAdded: false };
          }
          return item;
        }),
      };
    }
    case "EDIT_PROD_CART":
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload.id) {
            return { ...product, isAdded: true };
          }
          return product;
        }),
      };
    default:
      return state;
  }
}
