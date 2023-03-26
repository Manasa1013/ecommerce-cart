import { React } from "react";
// import { products } from "../data/data";
import { useProduct } from "../Contexts/ProductContext";
import { ProductItem } from "./ProductItem/ProductItem";
export function Products({ addToCartClickHandler, toast, setToast }) {
  const { state } = useProduct();

  return (
    <>
      <div className="grid-container">
        {state.products.map((prod) => {
          return (
            <ProductItem
              key={prod.id}
              prod={prod}
              addToCartClickHandler={addToCartClickHandler}
              setToast={setToast}
            />
          );
        })}
      </div>
    </>
  );
}
