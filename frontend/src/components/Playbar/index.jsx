import Actions from "./Actions";
import AudioPlayer from "./AudioPlayer";
import VolumeControl from "./VolumeControl";
import "./Playbar.css";
import { useSelector } from "react-redux";
import SignedOutBanner from "../SignupAndLogin/SignedOutBanner";
import CurrentSongContainer from "./CurrentSongContainer";

const Playbar = () => {
  const currentUser = useSelector((state) => state.session.user)
  
  return (
    <>
      <div className="playbar">
        <CurrentSongContainer />
        <div className="actionsAndProgressSliderContainer">
          <Actions />
          <AudioPlayer />
        </div>
          <VolumeControl />
        </div>
      {!currentUser && <SignedOutBanner />}
    </>
  );
};

export default Playbar;