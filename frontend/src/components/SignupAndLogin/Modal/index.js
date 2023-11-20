import React from "react";
import "./SignupModal.css";
import {getAlbum} from "../../../store/albums"
import {useSelector} from "react-redux"
import { Link, useParams } from "react-router-dom";

const SignUpModal = ({ onClose }) => {
  const {albumId} = useParams()
  const album = useSelector(getAlbum(albumId))

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modal">
        <img className="signUpModalImg" src={album.albumCoverUrl} alt="" />
        <div className="modalContent">
          <h3>Start listening with a free Spotify account</h3>
          <button type="submit" className="signupModalBtn">
            <Link to="/signup" className="signupModalSignupLink">
              Sign up free
            </Link>
          </button>
          <p className="signupModalLoginLink">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
      <button onClick={onClose} className="signupModalCloseBtn">
        Close
      </button>
    </div>
  );
};

export default SignUpModal;
