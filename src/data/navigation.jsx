import { FaMailBulk, FaGithub, FaLinkedin, FaKaggle, FaCode } from "react-icons/fa";

export const mainNavLinks = [
  { label: "Home", to: "/" },
  { label: "About Me", to: "/about" },
  { label: "What I Do", to: "/what-i-do" },
  { label: "Highlights", to: "/highlights" },
];

export const sidebarLinks = [
  { label: "Skills", to: "/skills" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Education", to: "/education" },
  { label: "Certification", to: "/certification" },
  { label: "Early Spark", to: "/early-spark" },
];

export const homeButtons = [
  { label: "Skills", to: "/skills", className: "primary" },
  { label: "Experience", to: "/experience", className: "secondary" },
  { label: "Projects", to: "/projects", className: "tertiary" },
  { label: "Education", to: "/education", className: "quaternary" },
  { label: "Certification", to: "/certification", className: "quinary" },
  { label: "Early Spark", to: "/early-spark", className: "senary" },
];

export const contactLinks = [
  {
    label: "Email",
    href: "mailto:eppalapellisatheesh21@gmail.com",
    icon: <FaMailBulk size={24} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/satheesheppalapelli",
    icon: <FaLinkedin size={24} />,
  },
  {
    label: "GitHub",
    href: "https://github.com/satheesheppalapelli",
    icon: <FaGithub size={24} />,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/satheesheppalapelli",
    icon: <FaCode size={24} />,
  },
  {
    label: "Kaggle",
    href: "https://www.kaggle.com/satheesheppalapelli",
    icon: <FaKaggle size={24} />,
  },
];

export const resumeLink = {
  label: "Resume",
  href: `${import.meta.env.BASE_URL}Satheesh_Eppalapelli_Resume.pdf`,
};
