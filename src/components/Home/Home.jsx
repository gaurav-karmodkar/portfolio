import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql } from "react-icons/si";
import "./Home.css";

const Home = () => {
  return (
    <section className="hero">
      {/* LEFT */}
      <div className="hero-left">
        <h1>
          Hi, I'm <span>Gaurav</span> <br />
          <span>Karmodkar</span>
        </h1>
        <h2>MERN Stack Developer</h2>
        <p>
          A highly motivated MERN Stack Developer with expertise in React.js,
          Node.js, Express.js, MongoDB, and modern web technologies.
        </p>
      </div>

      {/* RIGHT */}
      <div className="hero-right">
        <div className="floating-icons">
          <FaReact className="icon react" />
          <FaNodeJs className="icon node" />
          <SiMongodb className="icon mongo" />
          <SiExpress className="icon express" />
          <FaJs className="icon js" />

          {/* NEW ICONS */}
          <FaHtml5 className="icon html" />
          <FaCss3Alt className="icon css" />
          <FaBootstrap className="icon bootstrap" />
          <FaGitAlt className="icon git" />
          <FaGithub className="icon github" />
          <SiMysql className="icon mysql" />
        </div>
      </div>
    </section>
  );
};

export default Home;
