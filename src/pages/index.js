import React from "react";
import "./home.css";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const homeSliderData = [
  {
    id: 1,
    url: require("../images/hero7.jpeg"),
  },
  {
    id: 2,
    url: require("../images/hero8.jpeg"),
  },
  {
    id: 3,
    url: require("../images/hero9.jpeg"),
  },
  // {
  //   id: 1,
  //   url: require("../images/hero6.jpg"),
  // },
  // {
  //   id: 2,
  //   url: require("../images/hero5.jpg"),
  // },
  // {
  //   id: 3,
  //   url: require("../images/hero3.jpg"),
  // },
];
const IndexPage = () => {
  const settings = {
    className: "sliderStyle",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Layout>
      <SEO title="Home" />
      <div className="homeHero__container">
        <Slider {...settings}>
          {homeSliderData.map((el, index) => (
            <div style={{ backgroundColor: "blue" }} key={index}>
              <img src={el.url} className="home__hero-image" alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </Layout>
  );
};

export default IndexPage;
