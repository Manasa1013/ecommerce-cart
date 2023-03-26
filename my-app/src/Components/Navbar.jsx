import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faSearch,
} from "@fortawesome/fontawesome-free-solid";
import { Link } from "react-router-dom";
import { useProduct } from "../Contexts/ProductContext";
export const Navbar = () => {
  const { state, dispatch } = useProduct();
  const [search, setSearch] = useState("");
  function handleSearch() {
    let filteredProducts = state.products.filter(
      ({ title, description }) =>
        title.toLowerCase().includes(search) ||
        description.toLowerCase().includes(search)
    );
    console.log({ filteredProducts });
    dispatch({ type: "SEARCH_PRODUCTS", payload: filteredProducts });
  }
  return (
    <>
      <nav className="navbar-component">
        <div className="hamburger-menu">
          <a className="link inline" href="/">
            <span className="line "></span>
            <span className="line "></span>
            <span className="line "></span>
          </a>
          <header className="inline">
            <Link to="/" className="logo link">
              Ecommerce store
            </Link>
          </header>
        </div>
        <ul className="categories__list">
          <li>
            <Link to="/" className="link responsive">
              Home
            </Link>
          </li>
          <li>
            <input
              type="search"
              value={search}
              placeholder="Search products.."
              onChange={(e) => {
                console.log(e.target.value);
                setSearch(e.target.value.toLowerCase());
              }}
              onBlur={() => {
                handleSearch();
              }}
            />
            <button
              type="button"
              className="button__icon"
              onClick={() => handleSearch()}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </li>
        </ul>
        <ul className="categories__list">
          <li>
            <Link to="/" className="link">
              Login/Signup
            </Link>
          </li>
          <li>
            <Link to="/cart" className="link responsive">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </li>
          <li>
            <Link to="/" className="link responsive">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
