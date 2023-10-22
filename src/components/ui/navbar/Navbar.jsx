import styles from "./Navbar.module.css";
import logo from "../../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";
import Button from "../Button/Button";
export default function Navbar() {
  return (
    <header className="fixed-top bg-body-tertiary">
      <nav className="navbar navbar-expand-lg  container ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" width="125" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/cart">
                  Cart
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/categories"
                >
                  Categories
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/brands">
                  Brands
                </NavLink>
              </li>
            </ul>
            <div
              className={`${styles.socials} d-flex align-items-center gap-4`}
            >
              <ul className="d-flex list-unstyled gap-3 fs-5 mb-0">
                <li>
                  <a href="www.https/instagram.com">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="www.https/instagram.com">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="www.https/instagram.com">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="www.https/instagram.com">
                    <FaPinterest />
                  </a>
                </li>
              </ul>
              <Button
                moreStyles={{
                  "--color":  "var(--main-color)",
                  "--backgroung-color": "#fff",
                }}
                type="link"
                to="/login"
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
