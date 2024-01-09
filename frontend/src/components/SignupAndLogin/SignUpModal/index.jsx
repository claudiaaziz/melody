import "./SignupModal.css";
import { getAlbum } from "../../../store/albums";
import { useSelector } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";

const SignUpModal = ({ closeSignUpModal }) => {
  const history = useHistory();
  const { albumId } = useParams();
  const album = useSelector(getAlbum(albumId));

  const handleModalClick = (e) => e.stopPropagation();

  return (
    <div className="modalOverlay" onClick={closeSignUpModal}>
      <div className="modal" onClick={handleModalClick}>
        <img className="signUpModalImg" src={album.albumCoverUrl} alt="" />
        <div className="modalContent">
          <div className="signUpModalTextDiv">
            <h3>Start listening with a</h3>
            <h3>free Melody account</h3>
          </div>
          <button
            className="signupModalBtn"
            onClick={() => history.push("/signup")}
          >
            Sign up free
          </button>
          <p className="signupModalLoginLink">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
      <button onClick={closeSignUpModal} className="signupModalCloseBtn">
        Close
      </button>
    </div>
  );
};

export default SignUpModal;
