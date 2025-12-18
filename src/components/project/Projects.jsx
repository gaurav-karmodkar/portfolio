import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Weather App",
    description:
      "A dynamic weather application using HTML, CSS, and JavaScript. Integrated with a weather API to fetch real-time weather details based on user-inputted city names.",
    tech: ["HTML", "CSS", "JavaScript"],
    link:'https://gaurav-karmodkar.github.io/weather-app/',
  },
  {
    title: "Flipkart Clone",
    description:
      "Full-stack e-commerce app using React.js, Node.js, Express.js, and MongoDB. Features include product listing, product details, and add-to-cart functionality.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "CSS",
      "Bootstrap",
    
    ],
    link : 'https://gaurav-karmodkar.github.io/weather-app/',
  },
  {
    title: "Cognizant Clone",
    description:
      "A responsive clone of the Cognizant website showcasing modern web development practices.",
    tech: ["HTML", "CSS", "Bootstrap"],
     link: 'https://gaurav-karmodkar.github.io/cognizant-clone/',
  },
  {
    title: "Guidesly Web Clone",
    description:
      "A responsive clone of the Guidesly website demonstrating frontend development skills.",
    tech: ["HTML", "CSS", "Bootstrap"],
    link: 'https://gaurav-karmodkar.github.io/Guidesly-WebClone/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="about-title text-white">PROJECTS</h2>
          <div className="title-underline mx-auto"></div>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-6" key={index}>
              <div
                className="project-card h-100 float-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
               <a   href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="project-link"> <h5 >{project.title}</h5></a>
                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
