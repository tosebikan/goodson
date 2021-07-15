import React from "react";
import { Link } from "gatsby";
import "./home.css";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
          <div style={{ backgroundColor: "blue" }}>
            <img
              src={require("../images/hero6.jpg")}
              className="home__hero-image"
              alt=""
            />
          </div>
          <div style={{ backgroundColor: "blue" }}>
            <img
              src={require("../images/hero5.jpg")}
              className="home__hero-image"
              alt=""
            />
          </div>
          <div style={{ backgroundColor: "blue" }}>
            <img
              src={require("../images/hero3.jpg")}
              className="home__hero-image"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </Layout>
  );
};

export default IndexPage;
