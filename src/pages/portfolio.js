import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import "./portfolio.css";
import { endpoint } from "../helpers/api";

function Portfolio({ location }) {
  const [images, setImages] = useState([]);

  const data = location.state;

  useEffect(() => {
    updateImages();
  }, [data]);

  const updateImages = () => {
    let images = [];
    let lookup = {};
    let unique = [];

    data && data.route.images.map((el) => images.push(...el.images));

    for (let item of images) {
      if (!lookup[item.id]) {
        lookup[item.id] = true;
        unique.push(item);
      }
    }

    setImages(unique);
  };

  return (
    <Layout>
      <div className="portfolio_container">
        {images &&
          images.map((el) => {
            return <img src={`${endpoint}${el.url}`} alt="" key={el.id} />;
          })}
      </div>
    </Layout>
  );
}

export default Portfolio;
