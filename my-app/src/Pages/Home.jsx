import "../index.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Products } from "../Components/Products";

export const Home = ({ addToCartClickHandler, toast, setToast }) => {
  return (
    <>
      <main>
        <Products
          addToCartClickHandler={addToCartClickHandler}
          toast={toast}
          setToast={setToast}
        />
      </main>
      {/* <Footer /> */}
    </>
  );
};
