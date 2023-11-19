import React from "react";
import "./SignupModal.css";
import { Link } from "react-router-dom";

const SignUpModal = ({ onClose }) => {
  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modal">
        <div className="modalHeader">
          <h3>Start listening with a free Spotify account</h3>
        </div>
        <button type="submit" className="signupModalBtn">
          <Link to="/signup" className="signupModalSignupLink">
            Sign up free
          </Link>
        </button>
        <p className="signupModalLoginLink">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
      <button onClick={onClose} className="signupModalCloseBtn">
        Close
      </button>
    </div>
  );
};

export default SignUpModal;
