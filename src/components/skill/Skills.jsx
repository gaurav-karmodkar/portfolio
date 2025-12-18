import React from "react";
import "./Skills.css";

const skills = [
  { name: "HTML", icon: "bi bi-filetype-html " },
  { name: "CSS", icon: "bi bi-filetype-css" },
  { name: "JavaScript", icon: "bi bi-filetype-js" },
  { name: "React.js", icon: "bi bi-filetype-jsx" },
  { name: "Node.js", icon: "bi bi-node-plus" },
  { name: "MongoDB", icon: "bi bi-database" },
  { name: "MySQL", icon: "bi bi-database-fill" },
  { name: "Git", icon: "bi bi-git" },
  { name: "GitHub", icon: "bi bi-github" },
  { name: "Bootstrap", icon: "bi bi-bootstrap" },
  { name: "Express.js", icon: "bi bi-code-slash" },
  { name: "Python", icon: "bi bi-filetype-py" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section py-5">
      <div className="container text-center">

      <div className="text-center mb-5">
  <h2 className="about-title text-white">SKILLS</h2>
  <div className="title-underline mx-auto"></div>
</div>


        <div className="row g-4 justify-content-center">
          {skills.map((skill, index) => (
            <div key={index} className="col-6 col-md-3 col-lg-2">
              <div
                className="skill-card dance "
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <i className={skill.icon}></i>
                <p>{skill.name}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
