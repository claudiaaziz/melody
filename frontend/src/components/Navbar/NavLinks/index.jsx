import githubIcon from "../../../static/images/social-icons/githubIcon.png";
import linkedinIcon from "../../../static/images/social-icons/linkedinIcon.png"; 
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
        href="https://www.linkedin.com/in/claudiaaziz/"
      >
        <img src={linkedinIcon} alt="Linkedin Icon" className="navLinksIcon" />
      </a>
    </div>
  );
};

export default NavLinks;