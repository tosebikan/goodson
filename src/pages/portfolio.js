import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import "./portfolio.css";
import { endpoint } from "../helpers/api";

function Portfolio({ location }) {
  const [images, setImages] = useState([]);

  const data = location.state;
  console.log({ data });

  useEffect(() => {
    updateImages();
  }, [data]);

  const updateImages = () => {
    let images = [];
    data && data.route.images.map((el) => images.push(...el.images));
    let unique = [...new Set(images.map((el) => el.url))];
    // console.log("unique", unique);
    setImages(unique);
  };

  // console.log({ images });

  return (
    <Layout>
      <div className="portfolio_container">
        <div className="portfolio_info">
          <h2> {data.route.name}</h2>
          <p>Share: </p>
        </div>
        {images &&
          images.map((el) => {
            return <img src={`${endpoint}${el}`} alt="" key={el.id} />;
          })}
      </div>
    </Layout>
  );
}

export default Portfolio;
