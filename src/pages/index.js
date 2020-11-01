import React from "react";
import { Link } from "gatsby";
import "./home.css";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="homeHero__container">
      <img
        src={require("../images/hero1.png")}
        className="home__hero-image"
        alt=""
      />
      <img
        src={require("../images/hero1.png")}
        className="home__hero-image"
        alt=""
      />
    </div>
  </Layout>
);

export default IndexPage;
