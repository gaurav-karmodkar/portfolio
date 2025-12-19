import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section id="education" className="education-section py-5">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-5 skill-header">
          <h2 className="about-title text-white">EDUCATION & CERTIFICATES</h2>
          <div className="title-underline mx-auto"></div>
        </div>

        {/* Single Card */}
        <div className="edu-card mx-auto float-up">
          <h5>B-Tech Mechanical Engineering</h5>
          <span className="edu-duration">2020 - 2024</span>
          <p className="edu-institute">Government College of Engineering, Yavatmal</p>

          <h5>12th Standard</h5>
          <span className="edu-duration">2019 - 2020</span>
          <p className="edu-institute">H.E.S Junior College, Hiwara</p>

          <h5>10th Standard</h5>
          <span className="edu-duration">2017 - 2018</span>
          <p className="edu-institute">H.E.S High School, Hiwara</p>

          <h5>Full-Stack Python Certificate</h5>
          <span className="edu-duration">Naresh IT, Hyderabad</span>
          <p className="edu-institute">
            Covered Python, React.js, HTML, CSS, JavaScript, and MySQL with hands-on experience in web development and database management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
