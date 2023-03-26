import { Link } from "react-router-dom";
import "../index.css";
import "../Components/ProductItem/ProductItem.css";
import { getTrimmed, randomDiscount } from "../Utils/commonFunctions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/fontawesome-free-solid";
export const CartItem = ({
  prod,
  incClickHandler,
  decClickHandler,
  removeClickHandler,
}) => {
  // const addIcon = "fas fa-cart";
  // const wishIcon = "far fa-heart fa-lg";
  // const solidWishIcon = "fas fa-heart fa-lg";
  return (
    <div className="cart-card__container">
      <div className="cart-card__item">
        <Link className="link" to={`/product/${prod.id}`}>
          <div className="cart-card__img">
            <img
              className="w-full"
              width="100%"
              height="auto"
              src={prod.image}
              alt={prod.title}
            />
          </div>
        </Link>

        <div className="card-contents">
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

          <div className="flex--container">
            <button
              type="button"
              className=".button button__icon"
              style={{ color: "var(--color-dgreen)" }}
              onClick={() => incClickHandler(prod)}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <small className="align-left">
              {prod.count > 0 && `${prod.count}`}
            </small>
            <button
              type="button"
              className=".button button__icon"
              style={{ color: "var(--color-dgreen)" }}
              onClick={() => decClickHandler(prod)}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex-row-container">
        <button
          type="button"
          className="button button__secondary remove"
          onClick={() => removeClickHandler(prod)}
        >
          Remove
        </button>
        <button
          type="button"
          className="button button__secondary move-wishlist"
          onClick={() => removeClickHandler(prod)}
        >
          Move to Wishlist
        </button>
      </div>
    </div>
  );
};
