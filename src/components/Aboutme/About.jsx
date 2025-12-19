import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section-dark">
      <div className="container">

        {/* TITLE */}
        <div className="about-header text-center">
          <h2 className="about-title">ABOUT ME</h2>
          <div className="title-underline mx-auto"></div>
        </div>

        <div className="row g-4 align-items-stretch">

          {/* LEFT CARD */}
          <div className="col-md-7 d-flex">
            <div className="project-card fade-left w-100">
              <p>
                I'm <span className="highlight">Gaurav Karmodkar</span>, a highly motivated
                <span className="highlight"> MERN Stack Developer</span> with expertise in
                React.js, Node.js, Express.js, HTML, CSS, JavaScript, and Bootstrap.
              </p>

              <p className="mt-3">
                I love creating <span className="highlight">responsive</span> and
                <span className="highlight"> user-friendly</span> web applications with a
                focus on <span className="highlight">performance</span> and
                <span className="highlight"> UI/UX design</span>.
              </p>

              <p className="mt-3">
                I have developed projects like a
                <span className="highlight"> Cognizant website clone</span> and a
                <span className="highlight"> Flipkart clone</span>, showcasing my skills in
                component-based development, API integration, and responsive design.
              </p>

              <p className="mt-3">
                <strong>Technical Skills:</strong> React.js, Node.js, Express.js, MongoDB,
                HTML, CSS, JavaScript, Bootstrap, REST APIs, Git.
              </p>

              <p className="mt-3">
                <strong>Soft Skills:</strong> Team collaboration, problem-solving,
                critical thinking, communication.
              </p>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="col-md-5 d-flex">
            <div className="project-card fade-right w-100">
              <ul className="contact-list-dark">
                <li>
                  <i className="bi bi-envelope-fill"></i>
                  karmodkargaurav@gmail.com
                </li>
                <li>
                  <i className="bi bi-telephone-fill"></i>
                  +91 7059115566
                </li>
                <li>
                  <i className="bi bi-geo-alt-fill"></i>
                  Pune, Maharashtra
                </li>
                <li>
                  <i className="bi bi-linkedin"></i>
                  <a
                    href="https://linkedin.com/in/gaurav-karmodkar-42a3b02b9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/gauravkarmodkar
                  </a>
                </li>
                <li>
                  <i className="bi bi-github"></i>
                  <a
                    href="https://github.com/gaurav-karmodkar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/gauravkarmodkar
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
