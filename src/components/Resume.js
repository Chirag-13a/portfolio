import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { IoDownloadOutline } from "react-icons/io5";
import {
  skills,
  experience,
  projects,
  education,
  certifications,
  personalInfo,
} from "../data/portfolioData";

const navItems = [
  { path: "/", label: "About", end: true },
  { path: "/resume", label: "Resume", end: false },
  { path: "/projects", label: "Project", end: false },
  { path: "/experience", label: "Experience", end: false },
  { path: "/contact", label: "Contact", end: false },
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

function Resume() {
  return (
    <section className="section resume-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="resume-header-container"
      >
        <div className="resume-header">
          <div className="header-title-group">
            <h2 className="section-title">Resume</h2>
            <div className="title-underline" />
          </div>

          <nav className="resume-header-nav">
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

      <motion.a
        href={personalInfo.resumePdf}
        className="download-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoDownloadOutline />
        Download Resume
      </motion.a>

      <div className="resume-grid">
        <div className="resume-block">
          <h3 className="resume-block-title">
            <span className="block-icon">⚡</span> Technical Skills
          </h3>
          <div className="skills-list">
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                className="skill-group"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <strong>{group.category}:</strong>{" "}
                {group.items.join(", ")}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="resume-block">
          <h3 className="resume-block-title">
            <span className="block-icon">💼</span> Experience
          </h3>
          <div className="timeline">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                className="timeline-item"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <h4>{exp.company}</h4>
                <p className="timeline-role">{exp.role}</p>
                <p className="timeline-meta">
                  {exp.period} · {exp.location}
                </p>
                <ul>
                  {exp.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="resume-block">
          <h3 className="resume-block-title">
            <span className="block-icon">🚀</span> Projects
          </h3>
          <div className="resume-projects">
            {projects.map((proj, i) => (
              <motion.div
                key={proj.id}
                className="resume-project-item"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <h4>
                  {proj.title}{" "}
                  <span className="project-tags-inline">
                    | {proj.tags.join(", ")}
                  </span>
                </h4>
                <ul>
                  {proj.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="resume-block">
          <h3 className="resume-block-title">
            <span className="block-icon">🎓</span> Education
          </h3>
          <div className="timeline">
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution + edu.period}
                className="timeline-item"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <h4>{edu.institution}</h4>
                <p className="timeline-role">{edu.degree}</p>
                <p className="timeline-meta">
                  {edu.period} · {edu.location}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="resume-block">
          <h3 className="resume-block-title">
            <span className="block-icon">🏆</span> Certifications
          </h3>
          <ul className="cert-list">
            {certifications.map((cert, i) => (
              <motion.li
                key={cert}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                {cert}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
