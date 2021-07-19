import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./header.css";
import { apiFunctions } from "../helpers/api";

const Header = ({ siteTitle }) => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const toggleMenu = () => {
    if (document.querySelector(".header__menu").style.display === "block") {
      document.querySelector(".header__menu").style.display = "none";
    } else {
      document.querySelector(".header__menu").style.display = "block";
    }
  };

  const fetchCategories = async () => {
    let cat = await apiFunctions.getCategories();
    console.log({ cat });
    setCategories(cat);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

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

            <li className="full_sub_container">
              Portfolio
              <ul className="full_sub_menu">
                {categories &&
                  categories.map((el) => (
                    <Link to="/portfolio/" state={{ route: el }} key={el.id}>
                      <li>{el.name}</li>{" "}
                    </Link>
                  ))}
              </ul>
            </li>

            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contacts">
              <li>Contact</li>
            </Link>
          </ul>
        </div>

        <div className="header_social_links">
          <Link to="/about">
            <FontAwesomeIcon icon={faTwitter} className="header-contact-icon" />
          </Link>
          <Link to="/contacts">
            <FontAwesomeIcon
              icon={faInstagram}
              className="header-contact-icon"
            />
          </Link>
        </div>

        <div className="header_button_cont">
          <button id="head-btn" className="header-button" onClick={toggleMenu}>
            &#9776;
          </button>
        </div>
      </div>

      <div className="header__menu">
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
      </div>
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
