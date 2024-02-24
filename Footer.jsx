import React from "react";
import Logo from "../Assets/Logo.png";
import { BsInstagram } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";

const   Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          
          <a href="https://www.instagram.com/atmytech_software_solution?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"><BsInstagram /></a>
          <a href="https://www.linkedin.com/company/atmytech-software-solutions/" target="_blank"><SiLinkedin /></a>
          <a href="https://www.facebook.com/profile.php?id=100087799026854" target="_blank"><FaFacebookF /></a>  
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Contacts:</span>
          <span>Email id:</span>
        </div>
        <div className="footer-section-columns">
          <span>6369574742,6369920177</span>
          <span>atmytech4@gmail.com</span>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
