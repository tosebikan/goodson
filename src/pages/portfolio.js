import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import "./portfolio.css";
import { endpoint } from "../helpers/api";
import Slider from "react-slick";

function Portfolio({ location }) {
  const [images, setImages] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

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

  const handleClick = (e) => {
    console.log({ e });
    setInitialSlide(e);
    setOpenModal(!openModal);
  };

  const settings = {
    className: "portfolio_sliderStyle",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    initialSlide: initialSlide,
  };

  console.log(images);
  return (
    <Layout>
      <div className="portfolio_container">
        {/*PORTSOLIO MODAL SECTION */}

        <div className="portfolio_grid_container">
          {openModal && (
            <div className="portfolio_modal">
              <div
                className="portfolio_modal_close"
                onClick={() => setOpenModal(!openModal)}
              >
                X
              </div>
              <div className="portfolio_modal_img_container">
                <Slider {...settings}>
                  {images.map((el, index) => {
                    console.log("ELEMENT>>>", el);
                    return {
                      /*<div key={index}>
                        <img
                          src={el.url}
                          // src={`${endpoint}${el.url}`}
                          alt=""
                          className="portfolio_modal_img"
                        />
                      </div>*/
                    };
                  })}
                </Slider>
              </div>
            </div>
          )}
          {images &&
            images.map((el, id) => {
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
                  onClick={(e) => handleClick(id)}
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
      </div>
    </Layout>
  );
}

export default Portfolio;
