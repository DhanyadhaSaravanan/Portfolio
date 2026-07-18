import {
  FaCode,
  FaCss3,
  FaEnvelope,
  FaGithub,
  FaJava,
  FaLinkedin,
  FaStar,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiDocker,
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const iconMap = {
  FaCode,
  FaCss3,
  FaJava,
  FaStar,
  FaTrophy,
  FaUsers,
  VscVscode,
  SiCplusplus,
  SiDocker,
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
};

/** Resolves an icon name string to a react-icons component. */
export function getIcon(iconName) {
  return iconMap[iconName] ?? FaCode;
}

export { FaEnvelope, FaGithub, FaLinkedin };
