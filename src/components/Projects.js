import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoChevronDown,
  IoLogoGithub,
  IoOpenOutline,
} from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { projects, personalInfo } from "../data/portfolioData";

const projectGradients = {
  shopflow: "linear-gradient(135deg, #0f7c66 0%, #39e6b5 100%)",
  "ai-assistant": "linear-gradient(135deg, #263a5e 0%, #ffb86b 100%)",
  insightally: "linear-gradient(135deg, #7f3f57 0%, #ff6b6b 100%)",
  typometer: "linear-gradient(135deg, #155f6d 0%, #46d7ff 100%)",
  wastewise: "linear-gradient(135deg, #194b35 0%, #9bd66f 100%)",
  "awwwards-clone": "linear-gradient(135deg, #252525 0%, #d95f7a 100%)",
};

const navItems = [
  { path: "/", label: "About", end: true },
  { path: "/resume", label: "Resume", end: false },
  { path: "/projects", label: "Project", end: false },
  { path: "/experience", label: "Experience", end: false },
  { path: "/contact", label: "Contact", end: false },
];

function Projects() {
  const [openProject, setOpenProject] = useState(null);

  return (
    <section className="section projects-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="projects-header-container"
      >
        <div className="projects-header">
          <div className="header-title-group">
            <h2 className="section-title">Project</h2>
            <div className="title-underline" />
          </div>

          <nav className="projects-header-nav">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </motion.div>

      <motion.div className="projects-grid" layout>
        <AnimatePresence mode="popLayout">
          {projects.map((project) => (
            <motion.article
              key={project.id}
              className={`project-card ${openProject === project.id ? "expanded" : ""}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -10, rotateX: 1.5, rotateY: -1.5 }}
            >
              <div
                className={`project-image project-image-${project.image}`}
                style={{ background: projectGradients[project.image] }}
              >
                <div className="project-image-overlay">
                  <div className="project-preview-window">
                    <div className="preview-bar">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="preview-body">
                      <p className="preview-kicker">{project.category}</p>
                      <h4>{project.title}</h4>
                      <div className="preview-lines">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="preview-actions">
                        <span>Live UI</span>
                        <span>API</span>
                      </div>
                    </div>
                  </div>
                  <span className="project-initial">{project.title.charAt(0)}</span>
                </div>
              </div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  className="project-details-toggle"
                  onClick={() =>
                    setOpenProject(openProject === project.id ? null : project.id)
                  }
                  aria-expanded={openProject === project.id}
                >
                  Details
                  <IoChevronDown />
                </button>
                <AnimatePresence initial={false}>
                  {openProject === project.id && (
                    <motion.ul
                      className="project-highlights"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      {project.highlights.slice(0, 4).map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
                <div className="project-links">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View on GitHub"
                  >
                    <IoLogoGithub /> Code
                  </a>
                  <button type="button" className="project-demo-btn" aria-label="View project">
                    <IoOpenOutline /> Demo
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <motion.a
        href={personalInfo.github}
        target="_blank"
        rel="noopener noreferrer"
        className="github-more-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        View More Projects on GitHub
      </motion.a>
    </section>
  );
}

export default Projects;
