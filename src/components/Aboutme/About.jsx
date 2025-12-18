import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className=" py-5 ">
      <div className="container">

        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="about-title text-white ">ABOUT ME</h2>
          <div className="title-underline mx-auto"></div>
        </div>

        <div className="row g-4 align-items-stretch mt-5">

          {/* Left Card: Personal Info + Bio */}
          <div className="col-md-7 ">
            <div className="project-card fade-left">
              <p>
                I'm <span className="highlight">Gaurav Karmodkar</span>, a highly motivated 
                <span className="highlight"> MERN Stack Developer</span> with expertise in React.js, Node.js, Express.js, HTML, CSS, JavaScript, and Bootstrap.
                I love creating <span className="highlight">responsive</span> and <span className="highlight">user-friendly</span> web applications with a focus on <span className="highlight">performance</span> and <span className="highlight">UI/UX design</span>.
              </p>

              <p className="mt-3">
                I have developed projects like a <span className="highlight">Cognizant website clone</span> and a <span className="highlight">Flipkart clone</span>, showcasing my skills in component-based development, state management, API integration, and responsive design. 
                I'm passionate about <span className="highlight">problem-solving</span> and eager to contribute innovative solutions in a dynamic work environment.
              </p>

              <p className="mt-3">
                <strong>Technical Skills:</strong> React.js, Node.js, Express.js, MongoDB, HTML, CSS, JavaScript, Bootstrap, REST APIs, Git, and version control. <br/>
                <strong>Soft Skills:</strong> Team collaboration, problem-solving, critical thinking, and effective communication.
              </p>

              <p className="mt-3">
                <strong>Hobbies & Interests:</strong> Coding challenges, learning new technologies, web design, and exploring creative solutions.
              </p>
            </div>
          </div>

          {/* Right Card: Contact Info */}
          <div className="col-md-5">
            <div className="project-card fade-right">
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
                  <a href="linkedin.com/in/gaurav-karmodkar-42a3b02b9" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/gauravkarmodkar
                  </a>
                </li>
                <li>
                  <i className="bi bi-github"></i>
                  <a href="github.com/gaurav-karmodkar" target="_blank" rel="noopener noreferrer">
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
