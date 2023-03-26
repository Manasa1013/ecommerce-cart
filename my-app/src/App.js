import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { useToast } from "./Contexts/ToastContext";
import { Toast } from "./Components/Toast/Toast";
import { SingleProduct } from "./Components/SingleProduct";
import { Home } from "./Pages/Home";
import { Products } from "./Components/Products";
import { Cart } from "./Components/Cart/Cart";
import { useProduct } from "./Contexts/ProductContext";

export default function App() {
  const { toast, setToast, hideToastBar } = useToast();
  const { dispatch } = useProduct();
  function addToCartHandler(newItem) {
    if (newItem.isAdded === true) {
      return;
    } else {
      dispatch({ type: "ADD_TO_CART", payload: newItem });
      dispatch({ type: "EDIT_PROD_CART", payload: newItem });
    }
  }
  useEffect(() => {
    let timer = setTimeout(() => {
      if (toast.isVisible === "show") {
        hideToastBar();
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [toast, hideToastBar]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              addToCartClickHandler={addToCartHandler}
              toast={toast}
              setToast={setToast}
            />
          }
        ></Route>
        {/* <Route path="/blogs" element={<Blogs />}></Route> */}
        <Route
          path="/products"
          element={
            <Products
              addToCartClickHandler={addToCartHandler}
              toast={toast}
              setToast={setToast}
            />
          }
        ></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/product/:productId"
          element={
            <SingleProduct
              addToCartClickHandler={addToCartHandler}
              setToast={setToast}
            />
          }
        ></Route>
        <Route
          path="*"
          element={
            <Home
              addToCartClickHandler={addToCartHandler}
              toast={toast}
              setToast={setToast}
            />
          }
        ></Route>
      </Routes>
      <Toast />
    </div>
  );
}
