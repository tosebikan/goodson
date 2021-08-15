import React from "react";
import Layout from "../components/layout";
import camera from "../images/camera.jpg";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <Layout>
      <div className="about_container">
        <img src={camera} alt="" />
        <div className="about_group">
          <div className="about_left">
            <h1> About page</h1>
            <div>
              <div>
                <FontAwesomeIcon icon={faInstagram} className="about-icon" />
                <FontAwesomeIcon icon={faFacebook} className="about-icon" />
                <FontAwesomeIcon icon={faTwitter} className="about-icon" />
                <FontAwesomeIcon icon={faWhatsapp} className="about-icon" />
              </div>
            </div>
          </div>

          <div className="about_right">
            <p>
              Photography to me is one of the purest form of art. I aim to
              create photographs that stand out in today’s highly competitive
              market and craft beautiful images that are just as unique as the
              people in the photographs.
            </p>
            <p>
              “Sometimes you will never know the value of a moment until it
              becomes a memory”.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
