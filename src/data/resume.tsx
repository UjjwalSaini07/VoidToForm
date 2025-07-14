import { Icons } from "@/components/common/icons";
import { CodeIcon, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ujjwal Saini",
  initials: "US",
  url: "https://www.ujjwalsaini.tech",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/New+Delhi,+Delhi",
  description:
    "MERN stack developer and open-source contributor building bold, user-focused, high-impact digital solutions.",
  summary:
    "I'm a full-stack developer and AI enthusiast with a proven track record in building scalable, high-performance applications. Specialized in the MERN stack, I’ve developed real-time systems, AI chatbots, and finance platforms that solve complex problems with efficiency and impact. From contributing to open-source at GSSoC to participating in multiple hackathons and publishing NPM packages, I bring innovation, precision, and a problem-solving mindset to every project. [CHECK RESUME HERE...](https://drive.google.com/file/d/1i11YmIoHXteCGHSBnVGBcit82c34tI2a/view?usp=sharing)",
  avatarUrl: "/assets/profile.png",
  skills: [ "Python", "CPP", "Javascript", "Typescript", "React", "Next.js", "Node.js", "Express", "MongoDB", "Docker", "Tailwind CSS", "SASS", "Mysql", "PostgreSQL", "Redis", "Google Cloud", "GitHub Actions", "Firebase", "Postman", "Docker", "Jenkins", "Git", "Github" ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#work", icon: Icons.briefcase, label: "Experience" },
    { href: "/#skills", icon: Icons.skills, label: "Skills" },
    { href: "/#projects", icon: CodeIcon, label: "Projects" },

  ],
  contact: {
    email: "ujjwalsaini0007@gmail.com",
    tel: "+9197xxxx",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/UjjwalSaini07",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ujjwalsaini07",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/UjjwalSaini0007",
        icon: Icons.x,
        navbar: true,
      },
      Portfolio: {
        name: "Portfolio",
        url: "https://www.ujjwalsaini.tech/",
        icon: Icons.globe,
        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/Ujjwal_Saini007/",
        icon: Icons.leetcode,
        navbar: true,
      },
      Codeforces: {
        name: "Codeforces",
        url: "https://codeforces.com/profile/UjjwalS007",
        icon: Icons.codeforces,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ujjwalsaini0007@gmail.com?subject=Hello%20Ujjwal!&body=Hi%20Ujjwal,%0D%0AI%20would%20like%20to%20get%20in%20touch%20with%20you.%20Please%20let%20me%20know%20a%20good%20time%20to%20connect.%0D%0AThanks!",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Curious Business Solution Pvt. Ltd.",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer Intern",
      logoUrl: "/assets/company/CBS.png",
      start: "July 2024",
      end: "April 2025",
      description:
        "Developed and deployed full-stack MERN applications, optimized page load by 30%, supported 500+ concurrent users, and designed scalable RESTful APIs. Improved mobile responsiveness by 40% and boosted user retention by 15%.",
    },
    {
      company: "IBM Skillbuilds",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Frontend Developer Intern",
      logoUrl: "/assets/company/IBM_Logo.png",
      start: "June 2024",
      end: "August 2024",
      description:
        "Worked on responsive frontend interfaces with React. Improved cross-browser compatibility and optimized web performance. Collaborated in code reviews and enforced quality coding practices.",
    },
  ],
  education: [
    {
      school: "Guru Gobind Singh Indraprastha University",
      href: "#",
      degree: "Bachelor of Technology in Information Technology - 9.21",
      logoUrl: "/assets/education_icons/GGSIU_logo.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "S B Mills Senior Secondary School",
      href: "#",
      degree: "Senior Secondary (PCM) - 85.4%",
      logoUrl: "/assets/education_icons/Class12.png",
      start: "2019",
      end: "2021",
    },
    {
      school: "S M Arya Public School",
      href: "#",
      degree: "Secondary Education - 80%",
      logoUrl: "/assets/education_icons/Class10.png",
      start: "2014",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "InvestIQ - Fintech Platform",
      href: "https://invest-iqs.vercel.app/",
      dates: "April 2025",
      active: true,
      description:
        "Built a real-time trading platform for crypto and stocks with advanced charting, customizable dashboards, and intelligent watchlists. Enhanced user engagement by 25% through smart analytics and an intuitive, clean UI.",
      technologies: [ "React", "Redux", "MongoDB", "Nodejs", "Express", "Python", "TailwindCss", "GitHub Actions", "Firebase", "Typescript"],
      links: [
        {
          type: "Website",
          href: "https://invest-iqs.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/UjjwalSaini07/InvestIQ",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/projects/InvestIQ.png",
    },
    {
      title: "Neura-AI - AI Chatbot",
      href: "https://neura-ais.vercel.app/",
      dates: "April 2025",
      active: true,
      description:
        "Developed a conversational AI bot leveraging Groq, Gemini AI, and real-time speech-to-text for fluid, human-like interactions across platforms. Improved customer engagement by 30% through responsive and intuitive dialogue flow.",
      technologies: [ "Next.js", "Tailwind", "Google Cloud", "Docker", "AI SDKs", ],
      links: [
        {
          type: "Website",
          href: "https://neura-ais.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/UjjwalSaini07/Neura-AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/projects/NeuraAI.png",
    },
    {
      title: "SkyStream - WebRTC Platform",
      href: "https://sky-stream-share.vercel.app/",
      dates: "February 2025",
      active: true,
      description:
        "WebRTC-powered collaboration tool with screen sharing, video calls, real-time chat, and file sharing. Reduced onboarding time by 50% through a seamless and interactive user experience.",
      technologies: [ "React", "Tailwind", "Firebase", "Docker", "PeerJS", ],
      links: [
        {
          type: "Website",
          href: "https://sky-stream-share.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/UjjwalSaini07/SkyStream",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/projects/SkyStream.png",
    },
    {
      title: "Smart Logistics Manager",
      href: "https://github.com/UjjwalSaini07/Smart-Logistics-Manager",
      dates: "June 2025",
      active: true,
      description:
        "Smart Logistics Manager is an AI-powered MERN-stack platform for real-time tracking, route optimization, and predictive analytics. Enhanced fleet efficiency and boosted on-time deliveries by 35% through intelligent performance monitoring.",
      technologies: ["TypeScript", "Tailwind", "Docker", "ShadCn"],
      links: [
        {
          type: "Website",
          href: "https://logisticsmanager.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/UjjwalSaini07/Smart-Logistics-Manager",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/projects/LogisticsPlatform.png",
    },
  ],
} as const;
