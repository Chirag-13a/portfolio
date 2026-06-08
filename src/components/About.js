import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  IoAnalytics,
  IoCodeSlash,
  IoColorPalette,
  IoSparkles,
} from "react-icons/io5";
import { personalInfo, services } from "../data/portfolioData";

const navItems = [
  { path: "/", label: "About", end: true },
  { path: "/resume", label: "Resume", end: false },
  { path: "/projects", label: "Project", end: false },
  { path: "/experience", label: "Experience", end: false },
  { path: "/contact", label: "Contact", end: false },
];

const iconMap = {
  code: IoCodeSlash,
  data: IoAnalytics,
  design: IoColorPalette,
  ai: IoSparkles,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function About() {
  return (
    <section className="section about-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="about-header-container"
      >
        <div className="about-header">
          <div className="header-title-group">
            <h2 className="section-title">About Me</h2>
            <div className="title-underline" />
          </div>

          <nav className="about-header-nav">
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

      <motion.p
        className="about-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {personalInfo.objective}
      </motion.p>

      <motion.p
        className="about-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        Alongside full-stack skills, I have a solid understanding of backend
        technologies including Node.js, Express.js, MongoDB, and FastAPI. I
        understand authentication, REST API integration, and building smooth
        connections between frontend and backend — enabling me to collaborate
        effectively with teams and deliver complete, data-driven applications.
      </motion.p>

      <h3 className="subsection-title">What I'm doing</h3>

      <motion.div
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service) => {
          const Icon = iconMap[service.icon];
          return (
            <motion.div
              key={service.title}
              className="service-card"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="service-icon">
                <Icon />
              </div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default About;
