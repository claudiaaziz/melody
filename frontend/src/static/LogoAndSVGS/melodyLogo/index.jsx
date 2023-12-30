import React from "react";
import spotifyIcon from "./spotifyIcon.png";
import "./MelodyLogo.css";
import { Link } from "react-router-dom";

const MelodyLogo = () => {
  return (
    <Link to="/" className="melodyLogoLink">
      <div className="melodyLogoContainer">
        <img src={spotifyIcon} alt="Spotify Icon" className="spotifyIcon" />
        <h2>Melody</h2>
      </div>
    </Link>
  );
};

export default MelodyLogo;