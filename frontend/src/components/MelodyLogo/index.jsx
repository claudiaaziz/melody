import { Link } from "react-router-dom";
import spotifyIcon from "../../static/images/spotifyIcon.png";
import "./MelodyLogo.css";

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