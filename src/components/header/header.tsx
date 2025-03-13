import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="Header-Main">
      <div className="Header-Title">
        <p>
          THE <br />
          <span>SILVER BIRCH</span>
        </p>
      </div>

      <div className="Navbar">
        <div>SEARCH BAR</div>

        <div className="Navbar-Links-container">
          <ul className="Navbar-Links">
            <li>HOME</li>
            <li>SHOP</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div>

        <div className="Cart-Image">CART</div>
      </div>
    </div>
  );
};

export default Header;
