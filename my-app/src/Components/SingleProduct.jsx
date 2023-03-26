import { useParams } from "react-router-dom";
import { useProduct } from "../Contexts/ProductContext";
import { ProductItem } from "./ProductItem/ProductItem";

export function SingleProduct({ addToCartClickHandler, setToast }) {
  const { state } = useProduct();
  let { productId } = useParams();
  productId = parseInt(productId, 10);
  // console.log(typeof productId, typeof state.products[0].id);
  let product = state.products.find((prod) => productId === prod.id);

  return (
    <section key={productId}>
      {product && (
        <ProductItem
          prod={product}
          addToCartClickHandler={() => addToCartClickHandler(product)}
          setToast={setToast}
        />
      )}
    </section>
  );
}
