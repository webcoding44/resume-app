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


// Education Section Logo's
import vbspu from './assets/education_logo/ghalib.jpg'
import bbdu from './assets/education_logo/schhool.jpg'
// Project Section Logo's
import carrental from './assets/work_logo/carRental.png'
import shopfinity from './assets/work_logo/shopfinity.webp';
import grocify from './assets/work_logo/grocify.png';
import evion from './assets/work_logo/evion.png';


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
      title: "MacOs Operating system ",
      description:
        "A macOS-inspired operating system interface crafted with a strong focus on visual polish and smooth user experience, where application windows move and transition fluidly using GSAP animations. The system delivers elegant window management, responsive interactions, and seamless motion effects that closely resemble a real desktop environment. With refined UI details and high-performance animations, every interaction feels natural and premium, creating an impressive and immersive operating system experience directly in the browser.",
      image: carrental,
      tags: [
        "ًًReact.JS",
        "Tailwind CSS",
        "Gsap",
      ],
      github: "https://github.com/webcoding44",
      webapp: "https://comforting-sfogliatella-ed15ca.netlify.app/"
    }
    ,
    {
      id: 2,
      title: "ShopFinity",
      description:
        "An interactive e-commerce web app built with React, Tailwind CSS, and Framer Motion. It features a product catalog powered by the Fake Store API with category filters and search, a wishlist that saves items using local storage, a shopping cart with quantity management, and an order system with a clear summary and confirmation modal. The platform also updates product listings instantly as users search or select categories, with smooth animations, smart notifications and a responsive UI for an easy shopping experience across devices.",
      image: shopfinity,
      tags: ["React.js", "Tailwind CSS", "Framer Motion", "REST API"],
      github: "https://github.com/webcoding44",
      webapp: "https://onlin-shop.vercel.app/",
    },
    {
      id: 3,
      title: "Dashboard",
      description:
        "A modern admin dashboard designed to provide clear insights and efficient data management through a clean and intuitive interface. The dashboard presents real-time analytics, interactive charts, and dynamic tables to help users monitor key metrics and system performance. Built with a responsive UI, it supports smooth navigation, advanced filtering, and role-based access to ensure secure and organized data control. Optimized frontend interactions and well-structured APIs work together to deliver fast updates, scalability, and a seamless user experience across devices.",
      image: grocify,
      tags: ["React.js", "Tailwind CSS", "Chart.JS", "AI Chatbot"],
      github: "https://github.com/webcoding44",
      webapp: "https://dashboard-react-psi.vercel.app/",
    },

  {
  id: 4,
  title: "3D Portfolio",
  description: "This 3D project represents one of my standout experiences in design and modeling. I aimed to bring every detail to life with precision and creativity, creating a sense of realism that engages the viewer. The result is a blend of art, technique, and innovation, and I’m proud to showcase it as a highlight in my portfolio",
  image: evion, 
  tags: ["React.js", "Tailwind CSS", "Three.JS" , "Gsap"],
  github: "https://github.com/webcoding44",
  webapp: "https://3dwebapplication.netlify.app/"
},
];  


