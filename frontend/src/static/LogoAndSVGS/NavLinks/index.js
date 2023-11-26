import React from "react";
import githubIcon from "./githubIcon.png";
import linkedinIcon from "./linkedinIcon.png"; 
import "./NavLinks.css";

const NavLinks = () => {
  return (
    <div className="navLinksContainer">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/claudiaaziz/melody"
      >
        <img src={githubIcon} alt="Github Icon" className="navLinksIcon" />{" "}
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/claudia-aziz-b940b0274"
      >
        <img src={linkedinIcon} alt="Linkedin Icon" className="navLinksIcon" />
      </a>
    </div>
  );
};

export default NavLinks;