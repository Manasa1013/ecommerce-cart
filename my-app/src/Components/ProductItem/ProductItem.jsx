import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faArrowRight } from "@fortawesome/fontawesome-free-solid";
import "./ProductItem.css";
import "../../index.css";
import { getTrimmed, randomDiscount } from "../../Utils/commonFunctions";
export const ProductItem = ({ prod, addToCartClickHandler, setToast }) => {
  return (
    <div className="card__container">
      <Link className="link" to={`/product/${prod.id}`}>
        <div className="img__container">
          <img
            className="w-full"
            width="100%"
            height="auto"
            src={prod.image}
            alt={prod.name}
          />
        </div>
      </Link>
      <div className="card-contents">
        <button
          className="pos"
          style={{ color: "var(--primary-green)" }}
          onClick={() => {
            // console.log("button clicked");
          }}
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <div className="product--desc">
          <h4 className="product--name">{getTrimmed(prod.title, 3)}</h4>
          <p className="product--info">{getTrimmed(prod.description, 4)}..</p>
          <div className="product--price">
            <span className="price">₹{prod.price}</span>
            <span className="strike--price">
              ₹{prod.price + randomDiscount}
            </span>
            <span className="discount">(₹{randomDiscount} OFF)</span>
          </div>
        </div>
        <div className="button__container">
          {!prod.isAdded ? (
            <button
              className="button button__primary"
              onClick={() => {
                console.log(prod);
                addToCartClickHandler(prod);
                setToast((prev) => ({
                  ...prev,
                  isVisible: "show",
                  message: "Added to cart",
                }));
              }}
            >
              Add to Cart
            </button>
          ) : (
            <Link to="/cart">
              <button className="button button__primary">
                Go to Cart <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
