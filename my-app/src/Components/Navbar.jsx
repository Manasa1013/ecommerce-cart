import { useEffect } from "react";
import { useToast } from "../Contexts/ToastContext";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const { setToast } = useToast();

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
              Lefties cart
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
            <Link to="/products" className="link responsive">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="link responsive">
              Blogs
            </Link>
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
              <em className="fa-solid fa-cart-shopping"></em>
            </Link>
          </li>
          <li>
            <Link to="/wishlist" className="link responsive">
              <em className="fa-solid fa-heart"></em>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
