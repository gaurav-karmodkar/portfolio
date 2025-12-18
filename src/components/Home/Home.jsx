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
    <section className="hero d-flex align-items-center mt-5">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT */}
          <div className="col-lg-6 text-white hero-left">
            <h1 className="display-4 fw-bold">
              Hi, I'm <span className="text-info">Gaurav</span> <br />
              <span className="text-info">Karmodkar</span>
            </h1>

            <h4 className="text-secondary my-3">
              MERN Stack Developer
            </h4>

            <p className=" fs-5">
              A highly motivated MERN Stack Developer with expertise in React.js,
              Node.js, Express.js, MongoDB, and modern web technologies.
            </p>
          </div>

          {/* RIGHT */}
          <div className="col-lg-6 d-flex justify-content-center hero-right">
            <div className="floating-icons">

              <FaReact className="icon react" />
              <FaNodeJs className="icon node" />
              <SiMongodb className="icon mongo" />
              <SiExpress className="icon express" />
              <FaJs className="icon js" />

              <FaHtml5 className="icon html" />
              <FaCss3Alt className="icon css" />
              <FaBootstrap className="icon bootstrap" />
              <FaGitAlt className="icon git" />
              <FaGithub className="icon github" />
              <SiMysql className="icon mysql" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
