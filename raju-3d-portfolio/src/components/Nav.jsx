import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "../data/portfolio";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Contact", "contact"]
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="nav">
      <button className="brand" onClick={() => go("home")} aria-label="Go home">
        <span>VPR</span>
      </button>

      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map(([label, id]) => (
          <button key={id} onClick={() => go(id)}>
            {label}
          </button>
        ))}
      </nav>

      <div className="nav-actions">
        <a className="resume-btn" href="/resume.pdf" target="_blank" rel="noreferrer">
          Resume
        </a>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}