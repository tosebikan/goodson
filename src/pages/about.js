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
              Photography to me is one of the purest forms of art. I enjoy
              creating through this medium, working with people to bring their
              visions to life, im easy gooing and my priority is making you as
              comfortable as you can be while we create your vision
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
