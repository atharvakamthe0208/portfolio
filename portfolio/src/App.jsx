import { useEffect } from "react";
import "./App.css";

function App() {

  useEffect(() => {
    const blob = document.querySelector(".cursorBlob");

    const moveBlob = (e) => {
      if (blob) {
        blob.style.left = e.clientX + "px";
        blob.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", moveBlob);

    return () => {
      window.removeEventListener("mousemove", moveBlob);
    };
  }, []);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Java",
    "Firebase",
    "GitHub",
    "Unreal Engine",
  ];

  const projects = [
    {
      title: "Raktdaan",
      desc: "Blood donation platform connecting donors, recipients and blood banks.",
    },
    {
      title: "Realm of Shadows",
      desc: "3D adventure game developed using Unreal Engine.",
    },
    {
      title: "Student Grade Tracker",
      desc: "Java application for managing student records and grades.",
    },
    {
      title: "Shopping Mall Billing System",
      desc: "C language project for billing and inventory management.",
    },
  ];

  return (
    <>
      {/* Mouse Following Blob */}
      <div className="cursorBlob"></div>

      {/* Animated Background Blobs */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      <nav>
        <h2>Atharva.</h2>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero" id="home">
        <div className="hero-left">
          <h1>
            Hi, I'm <span>Atharva Kamthe</span>
          </h1>

          <h3>Computer Engineering Student & Developer</h3>

          <p>
            Passionate about building web applications, Android apps,
            and innovative software solutions.
          </p>

          <div className="buttons">
            <button>View Projects</button>
            <button>Download Resume</button>
          </div>
        </div>

        <div className="hero-right">
          <img src="/sp1.png" alt="Profile" />
        </div>
      </section>

      <section className="about" id="about">
        <h2>About Me</h2>

        <p>
          I am a 3rd Year Computer Engineering student with interests in
          React, Android Development, Firebase, Java, and Unreal Engine.
          I enjoy creating projects that solve real-world problems.
        </p>
      </section>

      <section className="skills" id="skills">
        <h2>Skills</h2>

        <div className="skill-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="projects" id="projects">
        <h2>Projects</h2>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <button>GitHub</button>
            </div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Contact Me</h2>

        <p>Email: atharvakamthe2006@gmail.com</p>
        <p>GitHub: github.com/atharvakamthe0208</p>
        <p>LinkedIn: www.linkedin.com/in/atharvakamthe/</p>
      </section>

      <footer>
        <p>© 2026 Atharva Kamthe. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App; 