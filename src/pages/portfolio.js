import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import "./portfolio.css";
import { endpoint } from "../helpers/api";

function Portfolio({ location }) {
  const [images, setImages] = useState([]);
  const [openModal, setOpenModal] = useState(false);

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

  const handleClick = () => {
    setOpenModal(!openModal);
    console.log({ openModal });
  };

  return (
    <Layout>
      <div className="portfolio_container">
        <div className="portfolio_grid_container">
          {openModal && <div className="portfolio_modal"></div>}
          {images &&
            images.map((el) => {
              // console.log("IMAGE", el.url, el.height / el.width);
              let diff = el.height / el.width;
              let size = "small";
              if (diff > 1) {
                size = "large";
              } else if (diff > 0) {
                size = "medium";
              } else {
                size = "small";
              }
              return (
                <div
                  className={`card ${size}`}
                  key={el.id}
                  onClick={handleClick}
                >
                  <img
                    src={`${endpoint}${el.url}`}
                    alt=""
                    key={el.id}
                    className="portfolio_img"
                  />
                </div>
              );
            })}
        </div>

        {/*PORTSOLIO MODAL SECTION */}
      </div>
    </Layout>
  );
}

export default Portfolio;
