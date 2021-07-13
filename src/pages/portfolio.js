import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import "./portfolio.css";
import { endpoint } from "../helpers/api";

function Portfolio({ location }) {
  const [images, setImages] = useState([]);

  const data = location.state;

  useEffect(() => {
    updateImages();
  }, []);

  const updateImages = () => {
    let images = [];
    data && data.route.images.map((el) => images.push(...el.images));
    setImages(images);
  };

  return (
    <Layout>
      <div className="portfolio_container">
        <h1> {data.name}</h1>
        <p>Share: </p>
        {images &&
          images.map((el) => {
            return <img src={`${endpoint}${el.url}`} alt="" key={el.id} />;
          })}
      </div>
    </Layout>
  );
}

export default Portfolio;
