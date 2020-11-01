import React from "react";
import { Link } from "gatsby";
import "./home.css";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <img src={require("../images/hero1.png")} className="home__hero" alt="" />
  </Layout>
);

export default IndexPage;
