import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { profile } from "../../data/profile";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

const sectionIds = navLinks.map((link) => link.id);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useScrollSpy(sectionIds);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="text-lg font-bold text-secondary transition-colors hover:text-primary"
        >
          {profile.name.split(" ")[0]}
          <span className="text-primary">.</span>
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.id
                    ? "border-b-2 border-primary text-primary"
                    : "text-muted hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="rounded-lg p-2 text-secondary transition-colors hover:bg-slate-100 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <FaTimes className="text-xl" aria-hidden="true" />
          ) : (
            <FaBars className="text-xl" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile navigation panel */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <ul className="flex flex-col px-4 py-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={handleNavClick}
                  className={`block rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? "bg-blue-50 text-primary"
                      : "text-muted hover:bg-slate-50 hover:text-primary"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
