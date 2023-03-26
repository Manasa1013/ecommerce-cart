import { useContext, createContext, useEffect, useReducer } from "react";
import { APISERVER } from "../Utils/commonFunctions";
import { CartReducer } from "../Reducers/CartReducer";
export const ProductContext = createContext();

export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, {
    products: [],
    cart: [],
  });
  useEffect(() => {
    const fetchProducts = async () => {
      await fetch(`${APISERVER}/products`)
        .then((res) => res.json())
        .then((json) => {
          const modifiedProducts = json.map((item) => ({
            ...item,
            count: 0,
            isAdded: false,
          }));

          dispatch({ type: "SET_PRODUCTS", payload: modifiedProducts });
        })
        .catch((err) => console.error(err, "at fetching products"));
    };
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
