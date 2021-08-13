import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./header.css";
import { apiFunctions } from "../helpers/api";

const Header = ({ siteTitle }) => {
  // const [loading, setLoading] = useState(true);
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
    setCategories(cat);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <header>
      <div className="header">
        <div className="brand">
          <Link to="/">
            <img
              src={require("../images/goodlogo.png")}
              alt=""
              className="logo"
            />
          </Link>
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
          <a href="https://www.instagram.com/good_so_n/" targte="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              className="header-contact-icon"
            />
          </a>
          {/*<Link to="/contacts">
            <FontAwesomeIcon
              icon={faInstagram}
              className="header-contact-icon"
            />
          </Link>*/}
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

          <li>
            Portfolio
            <ul className="mobile_sub">
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
