import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";


const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Welcome to Atmytech Software Solutions!
          </h1>
          <p className="primary-text">
          Atmytech Software Solutions is a dynamic and innovative startup committed to shaping the future of technology through cutting-edge software solutions. Established with a vision to empower businesses and individuals with the latest in digital transformation, we are dedicated to providing unparalleled expertise and exceptional services.

Our team at Atmytech is a collective of seasoned professionals, each bringing a unique set of skills and experiences to the table. We thrive on creativity, collaboration, and a passion for staying at the forefront of technological advancements. Our commitment to excellence is reflected in every project we undertake, ensuring that our clients receive solutions that not only meet but exceed their expectations.

What sets us apart is our adaptability and agility. In an ever-evolving tech landscape, we understand the importance of staying nimble and responsive. At Atmytech, we embrace challenges as opportunities for growth and innovation, enabling us to deliver robust and scalable software solutions tailored to the specific needs of our clients.

          </p>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
