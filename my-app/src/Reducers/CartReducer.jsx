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
