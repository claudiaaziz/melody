import React from "react";
import spotifyIcon from "./spotifyIcon.png";
import "./MelodyLogo.css";

const MelodyLogo = () => {
  return (
    <div className="melodyLogoContainer">
      <img src={spotifyIcon} alt="Spotify Icon" className="logoImage" />
      <h1>Melody</h1>
    </div>
  );
};

export default MelodyLogo;
