import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        {/* Left */}
        <div>
          <h3 className="footer-logo">Gaurav Karmodkar</h3>
          <p className="footer-text">
            Passionate Full-Stack Developer building modern web applications.
          </p>
        </div>

        {/* Center */}
        <div>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Right */}
        <div>
          <h4>Connect</h4>
          <div className="footer-socials">
            <a href="https://github.com/gaurav-karmodkar" target="_blank"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/gaurav-karmodkar-42a3b02b9/" target="_blank"><FaLinkedin /></a>
            <a href="mailto:karmodkargaurav@gmail.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Gaurav Karmodkar • Built with{" "}
        <FaHeart className="heart" /> React
      </div>
    </footer>
  );
};

export default Footer;
