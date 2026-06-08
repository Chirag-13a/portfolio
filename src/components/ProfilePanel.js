import {
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";
import { personalInfo } from "../data/portfolioData";

function ProfilePanel() {
  return (
    <aside className="profile-panel">
      <div className="profile-card">
        <div className="profile-image-box">
          <img
            src={personalInfo.profileImage}
            alt={personalInfo.name}
            className="profile-image"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/profile.svg";
            }}
          />
        </div>

        <h1 className="profile-name">{personalInfo.name}</h1>
        <span className="profile-role">{personalInfo.title}</span>

        <div className="profile-divider" />

        <ul className="profile-contacts">
          <li>
            <IoMailOutline />
            <div>
              <span className="contact-label">EMAIL</span>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </div>
          </li>
          <li>
            <IoCallOutline />
            <div>
              <span className="contact-label">PHONE</span>
              <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
            </div>
          </li>
          <li>
            <IoLocationOutline />
            <div>
              <span className="contact-label">LOCATION</span>
              <span>{personalInfo.location}</span>
            </div>
          </li>
        </ul>

        <div className="profile-social">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <IoLogoGithub />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <IoLogoLinkedin />
          </a>
        </div>
      </div>
    </aside>
  );
}

export default ProfilePanel;
