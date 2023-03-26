import { useParams } from "react-router-dom";
// import { products } from "../data/data";
import { useProduct } from "../Contexts/ProductContext";
import { ProductItem } from "./ProductItem/ProductItem";

export function SingleProduct({ addToCartClickHandler, setToast }) {
  const { state } = useProduct();
  let { productId } = useParams();
  let product = state.products.find((prod) => productId === prod.id);
  // console.log(productId, product.id === productId);

  return (
    <section key={productId}>
      <ProductItem
        prod={product}
        addToCartClickHandler={() => addToCartClickHandler(product)}
        setToast={setToast}
      />
    </section>
  );
}
