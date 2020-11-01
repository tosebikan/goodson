import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faInfoCircle,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
  <footer className="footer">
    <ul className="footer__menu">
      <Link to="/">
        <li className="footer__menu-text">
          <FontAwesomeIcon icon={faHome} />
          <p>Home</p>
        </li>
      </Link>
      <Link to="/portfolio/">
        <li className="footer__menu-text">
          <FontAwesomeIcon icon={faBriefcase} />
          <p>Portfolio</p>
        </li>
      </Link>
      <li className="footer__menu-text">
        <FontAwesomeIcon icon={faInfoCircle} />
        <p>About</p>
      </li>
      <li className="footer__menu-text">
        <FontAwesomeIcon icon={faAddressCard} />
        <p>Contact</p>
      </li>
    </ul>
  </footer>
);

export default Footer;
