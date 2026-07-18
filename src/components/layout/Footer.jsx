import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../../data/profile";
import BackToTop from "../ui/BackToTop";

const socialLinks = [
  { icon: FaGithub, href: profile.social.github, label: "GitHub" },
  { icon: FaLinkedin, href: profile.social.linkedin, label: "LinkedIn" },
  { icon: FaEnvelope, href: profile.social.email, label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-secondary py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg transition-all duration-300 hover:scale-110 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary"
              aria-label={label}
            >
              <Icon aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="text-sm text-slate-400">
          &copy; {year} {profile.name}. All rights reserved.
        </p>
      </div>
      <BackToTop />
    </footer>
  );
}
