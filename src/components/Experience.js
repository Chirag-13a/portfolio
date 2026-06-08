import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";
import { experience } from "../data/portfolioData";

const navItems = [
  { path: "/", label: "About", end: true },
  { path: "/resume", label: "Resume", end: false },
  { path: "/projects", label: "Project", end: false },
  { path: "/experience", label: "Experience", end: false },
  { path: "/contact", label: "Contact", end: false },
];

function Experience() {
  const [expanded, setExpanded] = useState(experience[0]?.company || "");

  return (
    <section className="section experience-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="experience-header-container"
      >
        <div className="experience-header">
          <div className="header-title-group">
            <h2 className="section-title">Experience</h2>
            <div className="title-underline" />
          </div>

          <nav className="experience-header-nav">
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

      <div className="experience-cards">
        {experience.map((exp, i) => (
          <motion.article
            key={exp.company}
            className={`experience-card ${expanded === exp.company ? "expanded" : ""}`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ scale: 1.02 }}
          >
            <button
              type="button"
              className="exp-card-header exp-card-toggle"
              onClick={() => setExpanded(expanded === exp.company ? "" : exp.company)}
              aria-expanded={expanded === exp.company}
            >
              <div className="exp-company-badge">{exp.company.charAt(0)}</div>
              <div>
                <h3>{exp.company}</h3>
                <p className="exp-role">{exp.role}</p>
                <p className="exp-period">
                  {exp.period} | {exp.location}
                </p>
              </div>
              <IoChevronDown className="exp-toggle-icon" />
            </button>

            <AnimatePresence initial={false}>
              {expanded === exp.company && (
                <motion.ul
                  className="exp-highlights"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {exp.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
