import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "./footer.css";

const Footer = () => (
  <footer className="footer">
    <ul className="footer__menu">
      <li>Home</li>
      <li>Portfolio</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </footer>
);

export default Footer;
