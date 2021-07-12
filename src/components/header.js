import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "./header.css";

const Header = ({ siteTitle }) => {
  const toggleMenu = () => {
    if (document.querySelector(".header__menu").style.display === "block") {
      document.querySelector(".header__menu").style.display = "none";
    } else {
      document.querySelector(".header__menu").style.display = "block";
    }
  };
  return (
    <header>
      <div className="header">
        <div className="brand">
          <img
            src={require("../images/goodlogo.png")}
            alt=""
            className="logo"
          />
        </div>

        <div>
          <ul className="full_menu">
            <Link to="/">
              <li>Home</li>
            </Link>

            <li>Portfolio</li>
            <ul className="full_sub_menu">
              <Link to="/portfolio/" state={{ route: "wedding" }}>
                <li>Weddings</li>{" "}
              </Link>
              <Link to="/portfolio/" state={{ route: "events" }}>
                {" "}
                <li>Events</li>
              </Link>
              <Link to="/portfolio/" state={{ route: "fashion" }}>
                {" "}
                <li>Fashion</li>
              </Link>
              <Link to="/portfolio/" state={{ route: "graduations" }}>
                {" "}
                <li>Graduations</li>
              </Link>
            </ul>

            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contacts">
              <li>Contact</li>
            </Link>
          </ul>
        </div>

        <div>
          <button id="head-btn" className="header-button" onClick={toggleMenu}>
            &#9776;
          </button>
        </div>
      </div>

      {/*  <div className="header__menu">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/portfolio/">
            <li>Portfolio</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contacts">
            <li>Contact</li>
          </Link>
        </ul>
      </div> */}
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
