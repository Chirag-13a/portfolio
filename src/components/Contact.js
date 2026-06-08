import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
  IoSend,
  IoSparkles,
} from "react-icons/io5";
import { personalInfo } from "../data/portfolioData";

const navItems = [
  { path: "/", label: "About", end: true },
  { path: "/resume", label: "Resume", end: false },
  { path: "/projects", label: "Project", end: false },
  { path: "/experience", label: "Experience", end: false },
  { path: "/contact", label: "Contact", end: false },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ message: "", type: "idle" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const completeFields = Object.values(form).filter((value) => value.trim()).length;
  const progress = Math.round((completeFields / 3) * 100);
  const emailJsConfig = {
    serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
    templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
  };
  const hasEmailJsConfig = Object.values(emailJsConfig).every(Boolean);

  const quickTopics = [
    "Internship opportunity",
    "Freelance project",
    "Collaboration",
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const openEmailCompose = () => {
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      personalInfo.email
    )}&su=${subject}&body=${body}`;
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    const composeWindow = window.open(gmailUrl, "_blank", "noopener,noreferrer");

    if (!composeWindow) {
      window.location.href = mailtoUrl;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ message: "Preparing your message...", type: "idle" });

    try {
      if (hasEmailJsConfig) {
        await emailjs.send(
          emailJsConfig.serviceId,
          emailJsConfig.templateId,
          {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
            to_email: personalInfo.email,
          },
          emailJsConfig.publicKey
        );
        setStatus({ message: "Message sent successfully.", type: "success" });
      } else {
        openEmailCompose();
        setStatus({
          message: "Opened a prefilled email. Please send it from your email account.",
          type: "success",
        });
      }

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        message: "Could not send automatically. Opening a prefilled email instead.",
        type: "error",
      });
      openEmailCompose();
    } finally {
      setIsSubmitting(false);
    }
  };

  const applyTopic = (topic) => {
    setForm((current) => ({
      ...current,
      message: current.message
        ? `${current.message}\n\n${topic}: `
        : `${topic}: `,
    }));
  };

  return (
    <section className="section contact-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="contact-header-container"
      >
        <div className="contact-header">
          <div className="header-title-group">
            <h2 className="section-title">Contact</h2>
            <div className="title-underline" />
          </div>

          <nav className="contact-header-nav">
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

      <motion.div
        className="contact-map-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <iframe
          title="Location Map"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "16px" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.3251869408866!2d75.8372747!3d26.9124383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5f16bd4e4df%3A0x3f01439fbb6d5ec5!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>

      <div className="contact-grid">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>Get in Touch</h3>
          <p>
            I'm open to internships, collaborations, and full-time opportunities.
            Feel free to reach out!
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <IoMailOutline />
              </div>
              <div>
                <p className="detail-label">Email</p>
                <a href={`mailto:${personalInfo.email}`}>
                  {personalInfo.email}
                </a>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <IoCallOutline />
              </div>
              <div>
                <p className="detail-label">Phone</p>
                <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <IoLocationOutline />
              </div>
              <div>
                <p className="detail-label">Location</p>
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="contact-form-head">
            <h3>Contact Form</h3>
            <span>{progress}% ready</span>
          </div>
          <div className="form-progress" aria-hidden="true">
            <motion.span
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.25 }}
            />
          </div>
          <div className="quick-topics" aria-label="Message starters">
            {quickTopics.map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => applyTopic(topic)}
              >
                <IoSparkles />
                {topic}
              </button>
            ))}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <motion.button
            type="submit"
            className="submit-btn"
            disabled={isSubmitting}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <IoSend />
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
          {status.message && (
            <p className={`form-status ${status.type}`}>{status.message}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
