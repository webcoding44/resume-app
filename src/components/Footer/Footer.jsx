import React from "react";
import {
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

const Footer = () => {
  // smooth scroll
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // tracking function for social media clicks
  const trackSocialClick = (platform) => {
    if (window.gtag) {
      window.gtag("event", "social_click", {
        platform: platform,
        timestamp: new Date().toISOString(),
      });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold nf-r2 text-[#4aeb00]">
          Safiurahman Jami
        </h2>
        {/* navigation links  */}
        <nav className="flex flex-wrap justify-center eb-lora space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" }
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-[#4aeb00] text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>
        {/* social media icons  */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/safiurahman-jami-/",
              platform: "linkedin",
            },
            {
              icon: <FaGithub />,
              link: "https://github.com/webcoding44",
              platform: "github",
            },
            {
              icon: <SiFiverr />,
              link: "https://www.fiverr.com/sellers/safiurahmanjami/edit",
              platform: "fiverr",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSocialClick(item.platform)}
              className="text-xl hover:text-[#4aeb00] transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>
        {/* copyright text  */}
        <p className="text-sm text-gray-400 mt-6 eb-lora">
          © 2025 SM Jami. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;