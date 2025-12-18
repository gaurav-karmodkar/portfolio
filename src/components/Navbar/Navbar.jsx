import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const handleSetActive = (section) => {
    setActive(section);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm">
      <div className="container">
        <a href="#home" className="navbar-brand fw-bold brand-text">
          Gaurav Karmodkar
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#basic-navbar-nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="basic-navbar-nav">
          <ul className="navbar-nav ms-auto align-items-center gap-2">
            {["home", "about", "skills", "projects", "education", "contact"].map((section) => (
              <li className="nav-item" key={section}>
                <a
                  href={`#${section}`}
                  className={`nav-link custom-link ${active === section ? "active" : ""}`}
                  onClick={() => handleSetActive(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
