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
  skills: [ "React", "Next.js", "Node.js", "Typescript", "Python", "MongoDB", "Docker", "Tailwind CSS", "PostgreSQL", "Google Cloud", "GitHub Actions", "Firebase", "C++", "Java", ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#experience", icon: Icons.briefcase, label: "Experience" },
    { href: "/#skills", icon: Icons.skills, label: "Skills" },
    { href: "/#projects", icon: CodeIcon, label: "Projects" },

  ],
  contact: {
    email: "ujjwalsaini0007@gmail.com",
    tel: "+91 9717899079",
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
        "A real-time trading platform for crypto and stocks, featuring advanced charting, personalized dashboards, and smart watchlists. Improved user engagement by 25% with smart analytics and clean UI.",
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
        "Conversational AI bot using Groq, Gemini AI & speech-to-text for seamless human-like interaction. Boosted customer engagement by 30%.",
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
      title: "SkyStream - WebRTC Collab Platform",
      href: "https://sky-stream-share.vercel.app/",
      dates: "February 2025",
      active: true,
      description:
        "Remote collaboration tool with screen sharing, video calls, chat, and file sharing. Reduced onboarding time by 50%.",
      technologies: [ "React", "Tailwind", "SCSS", "Firebase", "Docker", "PeerJS", ],
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
        "AI-based logistics platform for real-time tracking, predictive analytics & delivery optimization. Increased on-time deliveries by 35%.",
      technologies: ["TypeScript", "Tailwind", "Docker", "ShadCn", "AI SDKs"],
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
      image: "/assets/projects/Logisticsimg.png",
    },
  ],
} as const;
