import React from "react";
import Layout from "../components/layout";
import "./portfolio.css";

function Portfolio({ location }) {
  console.log(location.state);
  return (
    <Layout>
      <div className="portfolio_container">
        <h1> Portfolio page</h1>
      </div>
    </Layout>
  );
}

export default Portfolio;
