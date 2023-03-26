import "../index.css";
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
