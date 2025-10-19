import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import heroImage from "./assets/avatar.jpg";
import project1 from "./assets/project1.jpeg";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import project4 from "./assets/project4.png";
import project5 from "./assets/project5.png";
import project6 from "./assets/project6.png";

function App() {
  return (
    <div className="app">
      {/* ---------- NAVBAR ---------- */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top shadow">
        <div className="container-fluid">
          <a href="#home" className="navbar-brand fw-bold text-orange fs-4">
            Arailym
          </a>

          {/* Burger button */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarMenu">
            <ul className="navbar-nav mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <a href="#home" className="nav-link text-white fw-semibold">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link text-white fw-semibold">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="nav-link text-white fw-semibold">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a href="#portfolio" className="nav-link text-white fw-semibold">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link text-white fw-semibold">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ---------- HERO ---------- */}
      <section id="home" className="hero-section d-flex align-items-center text-white">
        <div className="container text-center text-lg-start px-4">
          <p className="text-uppercase mb-2">Hello!</p>
          <h1 className="fw-bold display-5">
            I’m <span className="text-orange">Arailym Duisenali</span>
          </h1>
          <h5 className="text-orange mb-3">Frontend Web Developer</h5>
          <p className="text-light w-75 mx-auto mx-lg-0">
            I’m passionate about creating modern, interactive, and user-friendly web interfaces.
            I love turning design ideas into fully functional websites that not only look great but
            also deliver seamless user experiences.
          </p>
          <button className="btn btn-orange mt-3">Let’s talk</button>
        </div>
        <div className="hero-image-container">
          <img src={heroImage} alt="arailym" className="hero-image" />
        </div>
      </section>

      {/* ---------- ABOUT ---------- */}
      <section id="about" className="about-section text-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">
            About <span className="text-orange">Me</span>
          </h2>
          <div className="about-image-container mx-auto mb-4">
            <img src={heroImage} alt="arailym" className="about-image" />
          </div>
          <h4 className="fw-bold">Frontend Developer</h4>
          <p className="mx-auto mt-3 text-light w-75">
            Hi! I’m Arailym, a passionate frontend developer who loves creating elegant and
            functional web pages. My journey in programming started with curiosity — I wanted to
            understand how beautiful websites are made.
          </p>
          <button className="btn btn-orange mt-3">Hire Me</button>
        </div>
      </section>

      {/* ---------- SKILLS ---------- */}
      <section id="skills" className="skills-section text-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">
            My <span className="text-orange">Skills</span>
          </h2>
          <div className="w-75 mx-auto">
            {[
              { name: "HTML", level: "95%" },
              { name: "CSS", level: "90%" },
              { name: "JavaScript", level: "85%" },
              { name: "React", level: "70%" },
              { name: "Vue.js", level: "50%" },
              { name: "Bootstrap / Tailwind", level: "80%" },
            ].map((skill, index) => (
              <div className="skill mt-3" key={index}>
                <p className="text-start">{skill.name}</p>
                <div className="progress">
                  <div
                    className="progress-bar bg-orange"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PORTFOLIO ---------- */}
      <section id="portfolio" className="portfolio-section text-white text-center py-5">
        <div className="container">
          <h2 className="fw-bold mb-4">
            My <span className="text-orange">Projects</span>
          </h2>
          <div className="row justify-content-center">
            {[project1, project2, project3, project4, project5, project6].map((img, i) => (
              <div className="col-sm-6 col-md-4 mb-4" key={i}>
                <div className="card bg-dark text-white border-0 shadow project-card h-100">
                  <img src={img} className="card-img-top" alt={`Project ${i}`} />
                  <div className="card-body">
                    <h5 className="card-title text-orange">Project {i + 1}</h5>
                    <p className="card-text">
                      A responsive project built with React and Bootstrap.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section id="contact" className="contact-section text-white text-center py-5">
        <div className="container">
          <h2 className="fw-bold mb-4">
            Contact <span className="text-orange">Me</span>
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card bg-dark text-light border-0 shadow-lg p-4 rounded-4 text-start">
                <h5 className="text-orange mb-3 fw-bold">My Contact Information</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="bi bi-person-fill text-orange me-2"></i>
                    <strong>Name:</strong> Арайлым Дуйсенали
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-telephone-fill text-orange me-2"></i>
                    <strong>Phone:</strong> +7 (747) 681-71-80
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-envelope-fill text-orange me-2"></i>
                    <strong>Email:</strong> diysenali.arailym@icloud.com
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-telegram text-orange me-2"></i>
                    <strong>Telegram:</strong> aa_railymm
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-center text-white py-4">
        <p className="mb-0">
          © {new Date().getFullYear()}{" "}
          <span className="text-orange fw-bold">Arailym Duisenali</span>. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
