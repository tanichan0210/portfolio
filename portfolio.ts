import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Nguyen Duy Quyet",
  title: "Hi all, I'm Quyet",
  description:
    "I'm a Fullstack Developer and Team Lead with 7+ years building scalable web applications. Proficient in ReactJS/TypeScript, NodeJS/NestJS, Python/Django, and PHP/Laravel with strong experience in SQL and NoSQL databases. Experienced in microservices, AWS/Docker deployments, mentoring developers, and improving product quality and performance.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "tanichan0210",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  facebook: 'https://www.facebook.com/tani.454',
  instagram: "https://www.instagram.com/tani.0210/",
  email: "mailto:quyetnd.0210@gmail.com",
  linkedin: "https://www.linkedin.com/in/quyetnd0210ß/",
  github: "https://github.com/tanichan0210",
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "Fullstack development, microservices, and cloud deployments",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json",
      skills: [
        emoji("⚡ Build scalable web apps with ReactJS/TypeScript and Next.js"),
        emoji("⚡ Design and implement REST/GraphQL APIs with NodeJS/NestJS & Django"),
        emoji("⚡ Optimize SQL/NoSQL databases and design microservices architectures"),
        emoji("⚡ CI/CD on AWS and Docker; security and performance best practices"),
        emoji("⚡ Lead 5–10 engineers, own architecture decisions, enforce coding standards"),
        emoji("⚡ Agile/Scrum planning, stakeholder comms, delivery tracking"),
        emoji("⚡ Mentor developers, conduct code reviews, improve processes and quality"),
      ],
      softwareSkills: [
        { skillName: "TypeScript", iconifyTag: "logos:typescript-icon" },
        { skillName: "React", iconifyTag: "vscode-icons:file-type-reactjs" },
        { skillName: "Next.js", iconifyTag: "vscode-icons:file-type-light-next" },
        { skillName: "Node.js", iconifyTag: "logos:nodejs-icon" },
        { skillName: "NestJS", iconifyTag: "logos:nestjs" },
        { skillName: "Python", iconifyTag: "logos:python" },
        { skillName: "Django", iconifyTag: "vscode-icons:file-type-django" },
        { skillName: "PHP", iconifyTag: "logos:php" },
        { skillName: "Laravel", iconifyTag: "logos:laravel" },
        { skillName: "PostgreSQL", iconifyTag: "logos:postgresql" },
        { skillName: "MySQL", iconifyTag: "logos:mysql" },
        { skillName: "MongoDB", iconifyTag: "logos:mongodb-icon" },
        { skillName: "AWS", iconifyTag: "logos:aws" },
        { skillName: "Docker", iconifyTag: "logos:docker-icon" },
        { skillName: "Git", iconifyTag: "logos:git-icon" },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  { Stack: "Frontend/Design", progressPercentage: "85" },
  { Stack: "Backend", progressPercentage: "80" },
  { Stack: "Databases", progressPercentage: "80" },
  { Stack: "DevOps/Cloud", progressPercentage: "70" },
];

export const educationInfo: EducationType[] = [
  {
    schoolLogo: "/img/hcmus/hcmus.jpg",
    schoolName: "University of Science",
    subHeader: "Information Technology",
    duration: "2015 - 2018",
    desc: "GPA: 3/4",
    grade: "",
    descBullets: [],
  },
  {
    schoolLogo: "/img/pmp/atoha.jpeg",
    schoolName: "Atoha (PMI)",
    subHeader: "PMP Exam Preparation Course",
    duration: "06/2025 - 08/2025",
    desc: "Completed 35 contact hours (PMI requirement), certification in progress",
    grade: "",
    descBullets: [],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Developer",
    company: "Splus Software",
    companyLogo: "/img/splus/splus.png",
    date: "04/2018 - 08/2025",
    desc:
      "Developed and maintained fullstack web applications using ReactJS/TypeScript, NodeJS/NestJS, Python/Django, and PHP/Laravel. Designed microservices and optimized database performance (PostgreSQL, SQL Server, MongoDB, Cloud Firestore). Built CI/CD pipelines and deployed on AWS and Docker. Conducted code reviews, mentored developers, and ensured clean, maintainable code.",
  },
  {
    role: "Team Lead",
    company: "Splus Software",
    companyLogo: "/img/splus/splus.png",
    date: "04/2020 - 08/2025",
    desc:
      "Managed end-to-end project lifecycles and stakeholder communication in Agile/Scrum with multiple concurrent projects. Led teams of 5–10 engineers; provided technical direction, mentoring, and performance support. Designed system architecture and made key technology decisions to ensure scalability and maintainability. Facilitated retrospectives, improved processes, and ensured successful delivery and go-live support.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "MESOPHIA (School Management System)",
    role: "Developer",
    desc:
      "ReactJS/TypeScript, Python (Django), PostgreSQL. Built a reusable component-based system reducing duplicated code by ~40% and accelerating feature delivery.",
  },
  {
    name: "S-CORE (Digital Transformation Platform)",
    role: "Team Lead",
    desc:
      "ReactJS/TypeScript, NodeJS (NestJS), PostgreSQL, Microservices, MUI. Built a digital transformation platform for HR, opportunity, project, and warehouse using microservices for scalability and maintainability.",
  },
  {
    name: "DRIVER-MS (Driver Management System)",
    role: "Team Lead",
    desc:
      "ReactJS/TypeScript, Next.js, PHP (Laravel), PostgreSQL, Tailwind CSS. Implemented AI-assisted coding optimization to reduce development time and improve delivery efficiency.",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Nguyen Duy Quyet",
  description: greetings.description,
  author: "QuyetND",
  image: "https://avatars.githubusercontent.com/u/211866588?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Quyet",
    "QuyetND",
    "Nguyen Duy Quyet",
    "tanichan0210",
    "Portfolio",
    "Quyet Portfolio ",
    "Nguyen Duy Quyet Portfolio",
  ],
};
