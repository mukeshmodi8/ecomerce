import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../Pages/image/logo.png";
import "./Header.css";
import { auth } from "../../Firebase";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function logOut() {
    if (window.confirm("Are you sure you want to logout?")) {
      signOut(auth)
        .then(() => {
          window.location.href = "/";
        })
        .catch((err) => {
          console.error("Error during sign-out:", err);
        });
    }
  }

  return (
    <nav className="header">
      <div className="header-top">
        <div className="logo-container">
          <img src={logo} alt="TechShed" className="logo" />
          <span className="brand text-primary">Arbuda</span>
          <span className="brand m-lg-2">Mobile</span>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>
            <FaSearch />
          </button>
        </div>

        <div className="user-actions d-flex gap-2">
  <NavLink to="/wishlist" className="btn btn-outline-primary d-flex align-items-center gap-2">
    <FaHeart /> <span>Wishlist</span>
  </NavLink>

  <NavLink to="/cart" className="btn btn-outline-success d-flex align-items-center gap-2 position-relative">
    <FaShoppingCart /> <span>Cart</span>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cart-count">
      0
    </span>
  </NavLink>

  <NavLink to="/login" className="btn btn-outline-dark d-flex align-items-center gap-2">
    <FaUser /> <span>Sign In</span>
  </NavLink>
</div>


        <button
          className="menu-icon"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {dropdownOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`header-bottom ${dropdownOpen ? "open" : ""}`}>
  <NavLink to="/home">Home</NavLink>
  <NavLink to="/computer">Computers & Laptop</NavLink>
  <NavLink to="/tablets">Tablets</NavLink>
  <NavLink to="/drones">Drones & Cameras</NavLink>
  <NavLink to="/audio">Audio</NavLink>
  <NavLink to="/mobile">Mobile</NavLink>
  <NavLink to="/tv">T.V & Home Cinema</NavLink>
  <NavLink to="/wearable-tech">Wearable Tech</NavLink>
  <NavLink to="/sale" className="sale">Sale</NavLink>
</div>

    </nav>
  );
};

export default Header;
