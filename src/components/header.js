import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "./header.css";

const Header = ({ siteTitle }) => (
  <header>
    <div className="header">
      <div className="brand">
        <img src={require("../images/goodlogo.png")} alt="" className="logo" />
      </div>

      <div>
        <button
          id="head-btn"
          className="header-button"
          // onClick={toggleMenu}
        >
          &#9776;
        </button>
      </div>
    </div>

    <div classname="header__menu">
      <ul>
        <li>Home</li>
        <li>Portfolio</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
