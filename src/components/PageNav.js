import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

const navItems = [
  { path: "/", label: "About", end: true },
  { path: "/resume", label: "Resume", end: false },
  { path: "/projects", label: "Project", end: false },
  { path: "/experience", label: "Experience", end: false },
  { path: "/contact", label: "Contact", end: false },
];

function PageNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="page-nav">
      <button
        className="page-nav-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <IoClose /> : <IoMenu />}
      </button>

      <ul className={`page-nav-list ${open ? "open" : ""}`}>
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `page-nav-link ${isActive ? "active" : ""}`
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default PageNav;
