// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import typelogo from './assets/tech_logo/type.png';
import Antdes from './assets/tech_logo/ant.png';
import Material from './assets/tech_logo/matrail.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import threee from './assets/tech_logo/three.png';
import ReduxlLogo from './assets/tech_logo/redux.png';
import framermotionLogo from './assets/tech_logo/framer.png';
import nextfb from './assets/tech_logo/next.jpg';
import chart from './assets/tech_logo/chart.png'
import firebase from './assets/tech_logo/fire.png'
import hook from './assets/tech_logo/hook.png'
import prisma1 from './assets/tech_logo/prisma.png'
import query from './assets/tech_logo/qury.png'
import shadcn1 from './assets/tech_logo/shad.png'
import supabase from './assets/tech_logo/supa.png'
import vercel1 from './assets/tech_logo/ver.png'
import love from './assets/tech_logo/love.jpg'


// Education Section Logo's
import vbspu from './assets/education_logo/ghalib.jpg'
import bbdu from './assets/education_logo/schhool.jpg'
// Project Section Logo's
import carrental from './assets/work_logo/carRental.png'
import evion from './assets/work_logo/evion.png';
import xz from './assets/work_logo/xz.png'


export const SkillsInfo = [
   { 
    id: 1, 
    name: 'HTML', 
    logo: htmlLogo 
  },
  { 
    id: 2, 
    name: 'CSS', 
    logo: cssLogo 
  },
  { 
    id: 3, 
    name: 'JavaScript', 
    logo: javascriptLogo 
  },
  { 
    id: 4, 
    name: 'TypeScrip', 
    logo: typelogo 
  },
  { 
    id: 5, 
    name: 'Tailwind CSS', 
    logo: tailwindcssLogo 
  },
  { 
    id: 6, 
    name: 'React JS', 
    logo: reactjsLogo 
  },
  { 
    id: 7, 
    name: 'Next.JS', 
    logo: nextfb 
  },
  { 
    id: 8, 
    name: 'GSAP', 
    logo: gsapLogo 
  },
  { 
    id: 9, 
    name: 'Three.JS', 
    logo: threee 
  },
  { 
    id: 10, 
    name: 'Framer Motion', 
    logo: framermotionLogo
  },
  { 
    id: 11, 
    name: 'Ant Design', 
    logo: Antdes 
  },
  { 
    id: 12, 
    name: 'Material UI', 
    logo: Material 
  },
  { 
    id: 13, 
    name: 'Git', 
    logo: gitLogo 
  },
  { 
    id: 14, 
    name: 'GitHub', 
    logo: githubLogo 
  },
  { 
    id: 15, 
    name: 'Redux', 
    logo: ReduxlLogo 
  },
   { 
    id: 16, 
    name: 'Chart.JS', 
    logo: chart 
  },
   { 
    id: 17, 
    name: 'Firebase', 
    logo: firebase 
  },
   { 
    id: 18, 
    name: 'React-Hook-Form', 
    logo: hook 
  },
   { 
    id: 19, 
    name: 'Prisma', 
    logo: prisma1 
  },
   { 
    id: 20, 
    name: 'React-Query', 
    logo: query 
  },
   { 
    id: 21, 
    name: 'Shadcn', 
    logo: shadcn1 
  },
   { 
    id: 22, 
    name: 'Supabase', 
    logo: supabase 
  },
   { 
    id: 23, 
    name: 'Vercel', 
    logo: vercel1 
  },
     { 
    id: 24, 
    name: 'Lovable', 
    logo:  love 
  },
];

 
  export const education = [
    {
      id: 0,
      img: bbdu,
      school: "Omar Farooq High School,",
      date: "2012 - 2024",
      grade: "88.67%",
      degree: "Education and training period",
    },
    {
      id: 1,
      img: vbspu,
      school: "Ghalib University,",
      date: "2040 - 2025",
      grade: "86.20%",
      degree: "Bachelor's degree in Computer Science",
    },
  ];
  
  export const projects = [
    
    {
      id: 1,
      title: "Advance Dashboard",
      description:
        "This project involves the design and development of a modern financial analytics dashboard aimed at presenting key performance indicators (KPIs) in a clear, structured, and visually engaging way. The primary goal was to provide users with a real-time overview of essential metrics such as total revenue, active sales, conversion rate, average session duration, profit trends, and traffic sources. A strong emphasis was placed on creating a clean and intuitive user experience (UX) combined with a modern dark-themed user interface (UI). Data is presented through interactive visual components, including line charts for revenue trends, bar charts for revenue vs. expenses, and donut charts for traffic distribution. This approach enables users to quickly interpret insights and make data-driven decisions efficiently.",
      image: xz,
      tags: [
        "Next.JS",
        "Tailwind CSS",
        "Shadcn/ui",
        "Rapid API",
        "high_charts"
      ],
      github: "https://github.com/webcoding44/Advance-Dashboard-App/tree/main/src",
      webapp: "https://marvelous-sable-125bec.netlify.app/"
    }
    ,
    {
      id: 2,
      title: "LMS SaaS Platform",
      description:
        "",
      image: "",
      tags: ["Next.JS", "Tailwind CSS", "Clerk", "Sentry" , "Shadcn/ui" , "Supabase" , "Vapi"],
      github: "https://github.com/webcoding44",
      webapp: "",
    },
    
    
    
    
    
    
    
    {
      id: 3,
      title: "E-commerce Nike",
      description:
        "Nike-style eCommerce built with Devin AI, Next.js, Drizzle ORM, and Better Auth. In this project, you’ll master prompting as Devin helps generate sleek product pages powered by Next.js 15, TypeScript, and TailwindCSS. The backend runs on Neon PostgreSQL with Drizzle ORM, authentication is handled with Better Auth, and Zustand manages state — all packaged in a clean, modular UI to help you ship faster.",
      image: "",
      tags: ["Next.js", "Tailwind CSS", "Better Auth", "Zustand" , "Neon"],
      github: "https://github.com/webcoding44",
      webapp: "",
    },

  {
  id: 4,
  title: "E-commerce with Admin_Dashboard",
  description: "",
  image: "", 
  tags: ["React.js", "Tailwind CSS", "Three.JS" , "Gsap"],
  github: "https://github.com/webcoding44",
  webapp: ""
},





{
  id: 5,
  title: "Mac-OS Portfolio",
  description: "A macOS-inspired operating system interface crafted with a strong focus on visual polish and smooth user experience, where application windows move and transition fluidly using GSAP animations. The system delivers elegant window management, responsive interactions, and seamless motion effects that closely resemble a real desktop environment. With refined UI details and high-performance animations, every interaction feels natural and premium, creating an impressive and immersive operating system experience directly in the browser.",
  image: carrental, 
  tags: ["React.js", "Tailwind CSS", "Gsap"],
  github: "https://github.com/webcoding44",
  webapp: "https://comforting-sfogliatella-ed15ca.netlify.app/"
},
{
  id: 6,
  title: "3D Portfolio",
  description: "This 3D project represents one of my standout experiences in design and modeling. I aimed to bring every detail to life with precision and creativity, creating a sense of realism that engages the viewer. The result is a blend of art, technique, and innovation, and I’m proud to showcase it as a highlight in my portfolio",
  image: evion, 
  tags: ["React.js", "Tailwind CSS", "Three.JS" , "Gsap"],
  github: "https://github.com/webcoding44",
  webapp: "https://3dwebapplication.netlify.app/"
},
];  


